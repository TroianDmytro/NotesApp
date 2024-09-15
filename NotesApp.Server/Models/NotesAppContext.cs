using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace NotesApp.Server.Models
{
    public class NotesAppContext : IdentityDbContext<IdentityUser>
    {
        public NotesAppContext(DbContextOptions<NotesAppContext> options) : base(options)
        {
        }
        public virtual DbSet<Notes> Notes { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            // Для корректной работы Identity 
            modelBuilder.Entity<IdentityUserLogin<string>>(entity =>
            {
                entity.HasKey(login => new { login.LoginProvider, login.ProviderKey });
            });

            //Добавление дати и времени
            modelBuilder.Entity<Notes>()
                        .Property(n => n.CreatedAt)
                        .HasDefaultValueSql("GETDATE()"); // Для SQL Server

            base.OnModelCreating(modelBuilder);

        }
    }
}
