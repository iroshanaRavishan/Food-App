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
            string message = "";
            IdentityResult result = new();

            try
            {
                User user_ = new User()
                {
                    Name = user.Name,
                    UserName = user.UserName,
                    Email = user.Email,
                };

                result = await userManager.CreateAsync(user_);

                if(!result.Succeeded)
                {
                    return BadRequest(result);
                }

                message = "Registration Successfull!";

            } catch (Exception ex)
            {
                return BadRequest("Something went wrong, Please try again. " +  ex.Message);
            }
            return Ok(new { message = message, result = result });
        }

    }
}
