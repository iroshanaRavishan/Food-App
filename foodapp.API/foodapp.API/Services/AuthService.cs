using foodapp.API.Model;
using foodapp.API.Services.Interfaces;
using Microsoft.AspNetCore.Identity;
using System.IO;
using System.Security.Claims;

namespace foodapp.API.Services
{
    public class AuthService : IAuthService
    {
        private readonly UserManager<UserModel> userManager;
        private readonly SignInManager<UserModel> signInManager;

        public AuthService(UserManager<UserModel> userManager, SignInManager<UserModel> signInManager)
        {
            this.userManager = userManager;
            this.signInManager = signInManager;
        }

        public async Task<IdentityResult> RegisterUserAsync(UserRegistration model)
        {
            UserModel user = new UserModel
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

            return await userManager.CreateAsync(user, model.Password);
        }

        public async Task<(bool IsSuccess, string Message)> LoginUserAsync(UserLogin login)
        {
            var user = await userManager.FindByEmailAsync(login.Email);
            if (user == null)
                return (false, "The Email does not exist. Please check your credentials and try again!");

            login.Username = user.UserName;
            if (!user.EmailConfirmed)
                user.EmailConfirmed = true;

            var result = await signInManager.PasswordSignInAsync(user, login.Password, login.Remember, false);
            if (!result.Succeeded)
                return (false, "Invalid credentials. Please check your credentials and try again!");

            user.LastLogin = DateTime.UtcNow;
            await userManager.UpdateAsync(user);

            return (true, "Login Successful!");
        }

        public async Task LogoutUserAsync()
        {
            await signInManager.SignOutAsync();
        }

        public async Task<UserModel> GetUserByEmailAsync(string email)
        {
            return await userManager.FindByEmailAsync(email);
        }

        public async Task<UserModel> GetAuthenticatedUserAsync(ClaimsPrincipal user)
        {
            return await signInManager.UserManager.GetUserAsync(user);
        }

        public async Task<UserModel> GetProfilePictureAsync(string userId)
        {
            var user = await userManager.FindByIdAsync(userId);
            return user;
        }
    }
}
