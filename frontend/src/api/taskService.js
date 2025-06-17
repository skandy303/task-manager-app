const API_BASE_URL = 'http://localhost:5209/api';

export const taskService = {
  async getAllTasks() {
    const response = await fetch(`${API_BASE_URL}/tasks`);
    if (!response.ok) {
      throw new Error('Failed to fetch tasks');
    }
    return response.json();
  },

  async addTask(task) {
    const response = await fetch(`${API_BASE_URL}/tasks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...task,
        completed: false,
        createdAt: new Date().toISOString()
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to add task');
    }
    return response.json();
  },

  async updateTask(taskId, task) {
    const response = await fetch(`${API_BASE_URL}/tasks/${taskId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    });

    if (!response.ok) {
      throw new Error('Failed to update task');
    }

    // Check if there's content to parse
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      return response.json();
    }
    
    // If no content, return the updated task
    return task;
  },

  async deleteTask(taskId) {
    const response = await fetch(`${API_BASE_URL}/tasks/${taskId}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Failed to delete task');
    }
  },

  async deleteAllCompleted(tasks) {
    // Get all completed task IDs
    const completedTaskIds = tasks
      .filter(task => task.completed)
      .map(task => task.id);

    // Delete all completed tasks in parallel
    await Promise.all(
      completedTaskIds.map(taskId => this.deleteTask(taskId))
    );
  }
}; 