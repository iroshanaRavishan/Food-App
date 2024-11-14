using foodapp.API.Model;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;


namespace foodapp.API.Data
{
    public class DefaultProfilePictureDbContext : DbContext
    {
        public DefaultProfilePictureDbContext(DbContextOptions<DefaultProfilePictureDbContext> options) : base(options) { }

        public DbSet<DefaultUserImageModel> DefaultProfileImages { get; set; }

    }
}
