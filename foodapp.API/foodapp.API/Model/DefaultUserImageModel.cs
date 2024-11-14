using System.ComponentModel.DataAnnotations;

namespace foodapp.API.Model
{
    public class DefaultUserImageModel
    {
        public int Id { get; set; }

        [Required]
        public string FileName { get; set; }

        [Required]
        public string ContentType { get; set; }

        [Required]
        public byte[] Data { get; set; }
    }
}
