﻿using foodapp.API.Model;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace foodapp.API.Context
{
    public class ApplicationDbContext : IdentityDbContext<User>
    {
        // constructor
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options):base(options) { }
    }
}