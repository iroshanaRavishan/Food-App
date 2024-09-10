using foodapp.API.Model;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
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
        public async Task<IActionResult> RegisterUser(User user)
        {

            IdentityResult result = new();

            try
            {
                User user_ = new User()
                {
                    Name = user.Name,
                    Email = user.Email,
                    UserName = user.UserName,
                };

                result = await userManager.CreateAsync(user_, user.PasswordHash);

                if(!result.Succeeded)
                {
                    return BadRequest(result);
                }

            } catch (Exception ex)
            {
                return BadRequest(new{message = "Something went wrong, Please try again. " +  ex.Message});
            }

            return Ok(new { message = "Registration Successfull!", result = result });
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
                    
                    var result = await signInManager.PasswordSignInAsync(user_, login.Password, login.Remember, false);

                    if (!result.Succeeded)
                    {
                        return Unauthorized(new {message = "Check your login credentials and try again"});
                    }

                    user_.LastLogin = DateTime.UtcNow;
                    var updatedUser = await userManager.UpdateAsync(user_);
                } else 
                {
                    return BadRequest(new {message = "Please check your credentials and try again. "});
                }
               
            }
            catch (Exception ex)
            {
                return BadRequest(new {message = "Something went wrong, Please try again. " + ex.Message});
            }

            return Ok(new { message = "Login Successfull!" });
        }

        [HttpGet("logout")] // need to apply autherize here, TODO
        public async Task<IActionResult> LogoutUser()
        {
            try
            {
                await signInManager.SignOutAsync();
            } catch (Exception ex)
            {
                return BadRequest(new{message = "Something went wrong! " + ex.Message});
            }

            return Ok(new { message = "Successfully Logged out!"});
        }

        [HttpGet("admin")] // need to apply autherize here, TODO
        public async Task<IActionResult> AdminPage()
        {
            string[] partners = { "Doe", "john", "Smith", "Eric" };
            return Ok(new { trustedPartners = partners });
        }

        [HttpGet("home/{email}"), Authorize]
        public async Task<IActionResult> LandingPage(string email)
        {
            User user = await userManager.FindByEmailAsync(email);
            if(user == null)
            {
                return BadRequest(new { message = "Something went wrong! PLease try again later." });
            }

            return Ok(new { user = user});
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
                return BadRequest(new{message = "Something went wrong! Plase try again. " + ex.Message});
            }

            return Ok(new { message = "Logged In", user = currentUser });
        }
    }
}
