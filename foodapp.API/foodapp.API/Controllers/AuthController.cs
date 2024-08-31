﻿using foodapp.API.Model;
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

        [HttpPost("login")]
        public async Task<IActionResult> LoginUser(Login login)
        {
            string message = "";

            try
            {
                User user_ = await userManager.FindByIdAsync(login.Email);

                if(user_ != null && !user_.EmailConfirmed)
                {
                    user_.EmailConfirmed = true;
                }

                var result = await signInManager.PasswordSignInAsync(user_, login.Password, login.Remember, false);

                if (!result.Succeeded)
                {
                    return Unauthorized("Check your login credentials and try again");
                }
                
                user_.LastLogin = DateTime.UtcNow;
                var updatedUser = await userManager.UpdateAsync(user_);
                message = "Login Successfull!";

            }
            catch (Exception ex)
            {
                return BadRequest("Something went wrong, Please try again. " + ex.Message);
            }
            return Ok(new { message = message });
        }

        [HttpGet("logout"), Authorize]
        public async Task<IActionResult> LogoutUser()
        {
            string message = "Successfully Logged out!";

            try
            {
                await signInManager.SignOutAsync();
            } catch (Exception ex)
            {
                return BadRequest("Something went wrong! " + ex.Message);
            }

            return Ok(new { message = message});
        }

        [HttpGet("Auth"), Authorize]
        public async Task<IActionResult> CheckUser()
        {
            string message = "Logged In";
            User CurrentUser = new();

            try
            {
                var user_ = HttpContext.User;
                var principals = new ClaimsPrincipal(user_);
                var results = signInManager.IsSignedIn(principals);

                if (results)
                {
                    CurrentUser = await signInManager.UserManager.GetUserAsync(principals);
                } else
                {
                    return BadRequest("Access Denied!");
                }
            }
            catch (Exception ex)
            {
                return BadRequest("Something went wrong! Plase try again. " + ex.Message);
            }

            return Ok(new { message = message, user = CurrentUser });
        }

    }
}
