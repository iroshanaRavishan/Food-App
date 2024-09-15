using System.ComponentModel.DataAnnotations;

namespace foodapp.API.Model
{
    public class UserRegistrationModel
    {
        [Required]
        public string Name { get; set; }

        [Required]
        public string Email { get; set; }

        [Required]
        public string UserName { get; set; }

        [Required]
        public string Password { get; set; }

        // The uploaded profile picture
        public IFormFile ProfilePicture { get; set; }
    }

}
