using Backend.Repositories;
using Backend.Data;
using Backend.Models;
using Microsoft.EntityFrameworkCore;
public class TaskRepository : ITaskRepository
{
    private readonly TaskManagerDbContext _context;

    public TaskRepository(TaskManagerDbContext context) => _context = context;

    public async Task<IEnumerable<TaskItem>> GetAllAsync() => await _context.Tasks.ToListAsync();
    public async Task<TaskItem?> GetByIdAsync(int id) => await _context.Tasks.FindAsync(id);
    public async Task AddAsync(TaskItem task) { _context.Tasks.Add(task); await _context.SaveChangesAsync(); }
    public async Task UpdateAsync(TaskItem task) { _context.Tasks.Update(task); await _context.SaveChangesAsync(); }
    public async Task DeleteAsync(int id) {
        var task = await _context.Tasks.FindAsync(id);
        if (task != null) {
            _context.Tasks.Remove(task);
            await _context.SaveChangesAsync();
        }
    }
}
