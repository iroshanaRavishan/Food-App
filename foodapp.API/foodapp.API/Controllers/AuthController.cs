using foodapp.API.Model;
using foodapp.API.Services.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace foodapp.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthService authService;

        public AuthController(IAuthService authService)
        {
            this.authService = authService;
        }

        [HttpPost("register")]
        public async Task<IActionResult> RegisterUser([FromForm] UserRegistration model)
        {
            try
            {
                var result = await authService.RegisterUserAsync(model);

                if (!result.Succeeded)
                {
                    return BadRequest(result);
                }
            }
            catch (Exception ex)
            {
                return BadRequest(new
                {
                    message = $"Something went wrong, Please try again. {ex.Message}",
                    isSuccess = false
                });
            }

            return Ok(new { message = "Registration Successful!", isSuccess = true });
        }

        [HttpPost("login")]
        public async Task<IActionResult> LoginUser(UserLogin login)
        {
            var (isSuccess, message) = await authService.LoginUserAsync(login);
            if (!isSuccess)
                return Unauthorized(new { message, isSuccess = false });

            return Ok(new { message, isSuccess = true });
        }

        [HttpGet("logout"), Authorize]
        public async Task<IActionResult> LogoutUser()
        {
            await authService.LogoutUserAsync();
            return Ok(new { message = "Successfully Logged out!", isSuccess = true });
        }

        [HttpGet("home/{email}"), Authorize]
        public async Task<IActionResult> LandingPage(string email)
        {
            var user = await authService.GetUserByEmailAsync(email);
            if (user == null)
                return BadRequest(new { message = "Something went wrong! Please try again later.", isSuccess = false });

            return Ok(new { user, isSuccess = true });
        }

        [HttpGet("authuser")]
        public async Task<IActionResult> CheckUser()
        {
            try
            {
                var user = await authService.GetAuthenticatedUserAsync(User);
                if (user == null)
                    return Forbid();

                return Ok(new { message = "Logged In", user, isSuccess = true });
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = "Something went wrong! Please try again. " + ex.Message, isSuccess = false });
            }
        }

        [HttpGet("profile-picture/{userId}")]
        public async Task<IActionResult> GetProfilePicture(string userId)
        {
            var user = await authService.GetProfilePictureAsync(userId);
            if (user == null || user.ProfilePicture == null)
            {
                return NotFound();
            }

            return File(user.ProfilePicture, user.ProfilePictureContentType);
        }
    }
}
