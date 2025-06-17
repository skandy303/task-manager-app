using Backend.Services;
using Backend.Repositories;
using Backend.Models;
public class TaskService : ITaskService
{
    private readonly ITaskRepository _repo;

    public TaskService(ITaskRepository repo) => _repo = repo;

    public Task<IEnumerable<TaskItem>> GetAllTasksAsync() => _repo.GetAllAsync();
    public Task<TaskItem?> GetTaskAsync(int id) => _repo.GetByIdAsync(id);
    public Task AddTaskAsync(TaskItem task) => _repo.AddAsync(task);
    public Task UpdateTaskAsync(TaskItem task) => _repo.UpdateAsync(task);
    public Task DeleteTaskAsync(int id) => _repo.DeleteAsync(id);
}
