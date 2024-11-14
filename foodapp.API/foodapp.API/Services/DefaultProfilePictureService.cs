using foodapp.API.Data;
using foodapp.API.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace foodapp.API.Services
{
    public class DefaultProfilePictureService : IDefaultProfilePictureService
    {
        private readonly DefaultProfilePictureDbContext _context;

        public DefaultProfilePictureService(DefaultProfilePictureDbContext context)
        {
            _context = context;
        }

        public async Task<int> UploadImageAsync(IFormFile file)
        {
            if (file == null || file.Length == 0)
                throw new ArgumentException("No file uploaded!");

            using (var memoryStream = new MemoryStream())
            {
                await file.CopyToAsync(memoryStream);
                var image = new DefaultUserImageModel
                {
                    FileName = file.FileName,
                    ContentType = file.ContentType,
                    Data = memoryStream.ToArray()
                };

                _context.DefaultProfileImages.Add(image);
                await _context.SaveChangesAsync();

                return image.Id;
            }
        }

        public async Task<DefaultUserImageModel> GetImageAsync(int id)
        {
            return await _context.DefaultProfileImages.FindAsync(id);
        }

        public async Task<IEnumerable<DefaultUserImageModel>> GetAllImagesAsync()
        {
            return await _context.DefaultProfileImages
                .Select(i => new DefaultUserImageModel
                {
                    Id = i.Id,
                    FileName = i.FileName,
                    ContentType = i.ContentType
                })
                .ToListAsync();
        }

        public async Task<IEnumerable<DefaultUserImageModel>> GetAllImagesWithDataAsync()
        {
            return await _context.DefaultProfileImages.ToListAsync();
        }

        public async Task<IEnumerable<FileContentResult>> GetAllImageFilesAsync()
        {
            var images = await _context.DefaultProfileImages.ToListAsync();
            return images.Select(image =>
                new FileContentResult(image.Data, image.ContentType)
                {
                    FileDownloadName = image.FileName
                }).ToList();
        }
    }
}
