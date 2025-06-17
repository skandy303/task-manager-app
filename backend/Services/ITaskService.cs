using Backend.Models;
namespace Backend.Services
{
    public interface ITaskService
    {
        Task<IEnumerable<TaskItem>> GetAllTasksAsync();
        Task<TaskItem?> GetTaskAsync(int id);
        Task AddTaskAsync(TaskItem task);
        Task UpdateTaskAsync(TaskItem task);
        Task DeleteTaskAsync(int id);
    }
}
