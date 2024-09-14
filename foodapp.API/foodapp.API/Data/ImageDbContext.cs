using foodapp.API.Model;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;


namespace foodapp.API.Data
{
    public class ImageDbContext : DbContext
    {
        public ImageDbContext(DbContextOptions<ImageDbContext> options) : base(options) { }

        public DbSet<ImageModel> defaultProfileImages { get; set; }

    }
}
