using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using System.Threading.Tasks;
using foodapp.API.Services;
using System.Linq;

namespace foodapp.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DefaultProfilePictureController : ControllerBase
    {
        private readonly IDefaultProfilePictureService _pictureService;

        public DefaultProfilePictureController(IDefaultProfilePictureService pictureService)
        {
            _pictureService = pictureService;
        }

        [HttpPost("upload")]
        public async Task<IActionResult> UploadImage(IFormFile file)
        {
            try
            {
                var imageId = await _pictureService.UploadImageAsync(file);
                return Ok(new { imageId });
            }
            catch (ArgumentException e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetImage(int id)
        {
            var image = await _pictureService.GetImageAsync(id);
            if (image == null)
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
            var images = await _pictureService.GetAllImagesAsync();
            return Ok(images);
        }

        [HttpGet("all-files")]
        public async Task<IActionResult> GetAllImageFiles()
        {
            var fileResults = await _pictureService.GetAllImageFilesAsync();
            return Ok(fileResults);
        }
    }
}
