using foodapp.API.Model;
using Microsoft.AspNetCore.Identity;
using System.Security.Claims;

namespace foodapp.API.Services.Interfaces
{
    public interface IAuthService
    {
        Task<IdentityResult> RegisterUserAsync(UserRegistration model);
        Task<(bool IsSuccess, string Message)> LoginUserAsync(UserLogin login);
        Task LogoutUserAsync();
        Task<UserModel> GetUserByEmailAsync(string email);
        Task<UserModel> GetAuthenticatedUserAsync(ClaimsPrincipal user);
        Task<UserModel> GetProfilePictureAsync(string userId);
    }
}
