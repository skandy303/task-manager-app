using Backend.Services;
using Backend.Models;
public static class TaskEndpoints
{
    public static void MapTaskRoutes(this IEndpointRouteBuilder routes)
    {
        var group = routes.MapGroup("/api/tasks");

        group.MapGet("/", async (ITaskService service) =>
            Results.Ok(await service.GetAllTasksAsync()));

        group.MapGet("/{id}", async (int id, ITaskService service) =>
        {
            var task = await service.GetTaskAsync(id);
            return task is not null ? Results.Ok(task) : Results.NotFound();
        });

        group.MapPost("/", async (TaskItem task, ITaskService service) =>
        {
            await service.AddTaskAsync(task);
            return Results.Created($"/api/tasks/{task.Id}", task);
        });

        group.MapPut("/{id}", async (int id, TaskItem task, ITaskService service) =>
        {
            if (id != task.Id) return Results.BadRequest();
            await service.UpdateTaskAsync(task);
            return Results.NoContent();
        });

        group.MapDelete("/{id}", async (int id, ITaskService service) =>
        {
            await service.DeleteTaskAsync(id);
            return Results.NoContent();
        });
    }
}
