using Microsoft.EntityFrameworkCore;

namespace NotesApp.Server.Models
{
    public class NotesAppContext : DbContext
    {
        public NotesAppContext(DbContextOptions<NotesAppContext> options):base(options)
        {
        }
        public virtual DbSet<Notes> Notes { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

        }
    }
}
