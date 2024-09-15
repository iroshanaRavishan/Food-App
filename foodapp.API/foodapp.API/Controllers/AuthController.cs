using foodapp.API.Model;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.IO;
using System.Security.Claims;

namespace foodapp.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly SignInManager<User> signInManager;
        private readonly UserManager<User> userManager;

        public AuthController(SignInManager<User> _signInManager, UserManager<User> _userManager) 
        {
            signInManager = _signInManager;
            userManager = _userManager;
        }

        [HttpPost("register")]
        public async Task<IActionResult> RegisterUser([FromForm] UserRegistrationModel model)
        {
            IdentityResult result = new();

            try
            {
                User user = new User()
                {
                    Name = model.Name,
                    Email = model.Email,
                    UserName = model.UserName,
                    CreatedDate = DateTime.UtcNow,
                    ModifiedDate = DateTime.UtcNow
                };

                if (model.ProfilePicture != null)
                {
                    using var memoryStream = new MemoryStream();
                    await model.ProfilePicture.CopyToAsync(memoryStream);
                    user.ProfilePicture = memoryStream.ToArray();
                    user.ProfilePictureContentType = model.ProfilePicture.ContentType;
                }

                result = await userManager.CreateAsync(user, model.Password);

                if(!result.Succeeded)
                {
                    return BadRequest(result);
                }

            } catch (Exception ex)
            {
                var innerExceptionMessage = ex.InnerException?.Message;
                return BadRequest(new
                {
                    message = $"Something went wrong, Please try again. {ex.Message}. Inner Exception: {innerExceptionMessage}",
                    isSuccess = false
                });
            }

            return Ok(new { message = "Registration Successfull!", result = result, isSuccess = true });
        }

        [HttpPost("login")]
        public async Task<IActionResult> LoginUser(Login login)
        {
            try
            {
                User user_ = await userManager.FindByEmailAsync(login.Email);

                if(user_ != null)
                {
                    login.Username = user_.UserName;

                    if (!user_.EmailConfirmed) 
                    {
                        user_.EmailConfirmed = true;    
                    }
                    //throw new InvalidOperationException("Simulated exception during password sign-in.");
                    
                    var result = await signInManager.PasswordSignInAsync(user_, login.Password, login.Remember, false);

                    if (!result.Succeeded)
                    {
                        return Unauthorized(new {message = "Please check your credentials and try again!", isSuccess = true });
                    }

                    user_.LastLogin = DateTime.UtcNow;
                    var updatedUser = await userManager.UpdateAsync(user_);
                } else 
                {
                    return BadRequest(new {message = "The Email is not exists. Please check your credentials and try again!", isSuccess = false});
                }
               
            }
            catch (Exception ex)
            {
                return BadRequest(new {message = "Something went wrong, Please try again! " + ex.Message, isSuccess = false});
            }

            return Ok(new { message = "Login Successfull!", isSuccess = true });
        }

        [HttpGet("logout")] // need to apply autherize here, TODO
        public async Task<IActionResult> LogoutUser()
        {
            try
            {
                await signInManager.SignOutAsync();
            } catch (Exception ex)
            {
                return BadRequest(new{message = "Something went wrong! " + ex.Message, isSuccess = false});
            }

            return Ok(new { message = "Successfully Logged out!", isSuccess = true});
        }

        [HttpGet("admin")] // need to apply autherize here, TODO
        public async Task<IActionResult> AdminPage()
        {
            string[] partners = { "Doe", "john", "Smith", "Eric" };
            return Ok(new { trustedPartners = partners, isSuccess = true});
        }

        [HttpGet("home/{email}"), Authorize]
        public async Task<IActionResult> LandingPage(string email)
        {
            User user = await userManager.FindByEmailAsync(email);
            if(user == null)
            {
                return BadRequest(new { message = "Something went wrong! PLease try again later." , isSuccess = false});
            }

            return Ok(new { user = user, isSuccess = true });
        }

        [HttpGet("authuser")]
        public async Task<IActionResult> CheckUser()
        {
            User currentUser = new();

            try
            {
                var user_ = HttpContext.User;
                var principals = new ClaimsPrincipal(user_);
                var result = signInManager.IsSignedIn(principals);

                if (result)
                {
                    currentUser = await signInManager.UserManager.GetUserAsync(principals);
                } else
                {
                    return Forbid();
                }
            }
            catch (Exception ex)
            {
                return BadRequest(new{message = "Something went wrong! Plase try again. " + ex.Message, isSuccess = false });
            }

            return Ok(new { message = "Logged In", user = currentUser, isSuccess = true});
        }

        [HttpGet("profile-picture/{userId}")]
        public async Task<IActionResult> GetProfilePicture(string userId)
        {
            var user = await userManager.FindByIdAsync(userId);
            if (user == null || user.ProfilePicture == null)
            {
                return NotFound();
            }

            return File(user.ProfilePicture, user.ProfilePictureContentType);
        }
    }
}
