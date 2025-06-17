using Microsoft.EntityFrameworkCore;
using Backend.Models;
namespace Backend.Data
{
    public class TaskManagerDbContext : DbContext
    {
        public DbSet<TaskItem> Tasks { get; set; }

        public TaskManagerDbContext(DbContextOptions<TaskManagerDbContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            
            modelBuilder.Entity<TaskItem>()
                .HasKey(t => t.Id);
                
            modelBuilder.Entity<TaskItem>()
                .Property(t => t.Title)
                .IsRequired();

        }
    }
}