using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using System.IO;
using System.Threading.Tasks;
using foodapp.API.Data;
using foodapp.API.Model;

namespace foodapp.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class defaultProfilePictureController : ControllerBase
    {
        private readonly ImageDbContext _context;

        public defaultProfilePictureController(ImageDbContext context)
        {
            _context = context;
        }

        [HttpPost("upload")]
        public async Task<IActionResult> UploadImage(IFormFile file)
        {
            if (file == null && file.Length == 0)
                return BadRequest("No File Uploaded!");
            using (var memoryStream = new MemoryStream())
            {
                await file.CopyToAsync(memoryStream);
                var image = new ImageModel
                {
                    FileName = file.FileName,
                    ContentType = file.ContentType,
                    Data = memoryStream.ToArray()
                };

                _context.defaultProfileImages.Add(image);
                await _context.SaveChangesAsync();

                return Ok(new { image.Id });
            }
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetImage(int id)
        {
            var image = await _context.defaultProfileImages.FindAsync(id);

            if(image == null)
                return NotFound();

            var result = new
            {
                Id = image.Id,
                Data = Convert.ToBase64String(image.Data),
                ContentType = image.ContentType,
                FileName = image.FileName
            };

            return Ok(result);
        }

        [HttpGet("all")]
        public async Task<IActionResult> GetAllImages()
        {
            var images = await _context.defaultProfileImages
                .Select(i => new
                {
                    i.Id,
                    i.FileName,
                    i.ContentType
                })
                .ToListAsync();

            return Ok(images);
        }

        [HttpGet("all-with-data")]
        public async Task<IActionResult> GetAllImagesWithData()
        {
            var images = await _context.defaultProfileImages.ToListAsync();
            return Ok(images);
        }

        [HttpGet("all-files")]
        public async Task<IActionResult> GetAllImageFiles()
        {
            var images = await _context.defaultProfileImages.ToListAsync();

            var fileResults = images.Select(image =>
                new FileContentResult(image.Data, image.ContentType)
                {
                    FileDownloadName = image.FileName
                }).ToList();

            return Ok(fileResults);
        }

    }
}
