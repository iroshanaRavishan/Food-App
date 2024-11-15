using foodapp.API.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace foodapp.API.Services
{
    public interface IDefaultProfilePictureService
    {
        Task<int> UploadImageAsync(IFormFile file);
        Task<DefaultUserImageModel> GetImageAsync(int id);
        Task<IEnumerable<DefaultUserImageModel>> GetAllImagesAsync();
        Task<IEnumerable<DefaultUserImageModel>> GetAllImagesWithDataAsync();
        Task<IEnumerable<FileContentResult>> GetAllImageFilesAsync();
    }
}
