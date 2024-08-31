using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace foodapp.API.Model
{
    public class User: IdentityUser
    {
        [MaxLength(50)]
        public string Name { get; set; }

        public DateTime CreatedDate { get; set; }

        public DateTime ModifiedDate { get; set; }

        public DateTime LastLogin { get; set; }

        public bool IsAdmin { get; set; } = false;
    }
}
