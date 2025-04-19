using Microsoft.EntityFrameworkCore;
using ContactAPI.Models;

namespace ContactAPI.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options)
        {
        }

        // This table will be created
        public DbSet<ContactMessage> ContactMessages { get; set; }
    }
}
