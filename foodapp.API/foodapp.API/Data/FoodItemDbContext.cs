using foodapp.API.Model;
using Microsoft.EntityFrameworkCore;

namespace foodapp.API.Data
{
    public class FoodItemDbContext : DbContext
    {
        public FoodItemDbContext(DbContextOptions<FoodItemDbContext> options) : base(options) { }

        public DbSet<FoodItemModel> FoodItems { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<FoodItemModel>(entity =>
            {
                entity.Property(e => e.FellTo)
                    .HasColumnType("jsonb"); // PostgreSQL JSONB type for FellTo array

                entity.Property(e => e.Reviews)
                    .HasColumnType("jsonb");

                entity.Property(e => e.Ingredients)
                    .HasColumnType("jsonb");
            });
        }
    }
}
