using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace foodapp.API.Model
{
    public class FoodItemModel
    {
        [Key]
        public Guid Id { get; set; }

        [Required]
        [MaxLength(100)]
        public string Category { get; set; }

        [Required]
        [MaxLength(100)]
        public string Name { get; set; }

        public List<string> FellTo { get; set; }

        [MaxLength(500)]
        public string QuickSummary { get; set; }

        public string Summary { get; set; }

        [Column(TypeName = "decimal(10,2)")]
        public decimal Price { get; set; }

        public int AggregateLikes { get; set; }

        public List<string> Reviews { get; set; }

        public List<string> Ingredients { get; set; }

        public bool IsCustomizable { get; set; }

        public string Image { get; set; }

        public string Servings { get; set; }

        public int ReadyInMinutes { get; set; }

        public string Size { get; set; }

        public string Tags { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

        public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;
    }
}
