using Microsoft.EntityFrameworkCore;
using Backend.Data;
using Backend.Repositories;
using Backend.Services;

var builder = WebApplication.CreateBuilder(args);

// Configure database path
var folder = Environment.SpecialFolder.LocalApplicationData;
var path = Environment.GetFolderPath(folder);
var dbPath = Path.Join(path, "tasks1.db");
Console.WriteLine($"Database path: {dbPath}");

// Add services to the container
builder.Services.AddDbContext<TaskManagerDbContext>(options =>
    options.UseSqlite($"Data Source={dbPath}"));

builder.Services.AddScoped<ITaskRepository, TaskRepository>();
builder.Services.AddScoped<ITaskService, TaskService>();

// Add CORS
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(builder =>
    {
        builder.AllowAnyOrigin()
               .AllowAnyMethod()
               .AllowAnyHeader();
    });
});

var app = builder.Build();

// Use CORS
app.UseCors();

app.MapTaskRoutes(); // from TaskEndpoints.cs

app.Run();
