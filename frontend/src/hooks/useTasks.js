import { useState, useEffect } from 'react';
import { taskService } from '../api/taskService';

export const useTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingTask, setEditingTask] = useState(null);
  const [editForm, setEditForm] = useState({ title: '', description: '' });

  const fetchTasks = async () => {
    try {
      const data = await taskService.getAllTasks();
      setTasks(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleAddTask = async (task) => {
    try {
      const newTask = await taskService.addTask(task);
      setTasks(prev => [...prev, newTask]);
      return true;
    } catch (err) {
      setError(err.message);
      return false;
    }
  };

  const handleToggle = async (taskId) => {
    try {
      const task = tasks.find(t => t.id === taskId);
      const updatedTask = { ...task, completed: !task.completed };
      await taskService.updateTask(taskId, updatedTask);
      setTasks(prev => prev.map(t => t.id === taskId ? updatedTask : t));
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDelete = async (taskId) => {
    try {
      await taskService.deleteTask(taskId);
      setTasks(prev => prev.filter(t => t.id !== taskId));
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDeleteAllCompleted = async () => {
    try {
      await taskService.deleteAllCompleted(tasks);
      await fetchTasks(); // Refresh the task list
    } catch (err) {
      setError(err.message);
    }
  };

  const handleStartEdit = (taskId) => {
    const task = tasks.find(t => t.id === taskId);
    setEditingTask(taskId);
    setEditForm({ title: task.title, description: task.description || '' });
  };

  const handleCancelEdit = () => {
    setEditingTask(null);
    setEditForm({ title: '', description: '' });
  };

  const handleSaveEdit = async () => {
    try {
      const updatedTask = { ...tasks.find(t => t.id === editingTask), ...editForm };
      await taskService.updateTask(editingTask, updatedTask);
      setTasks(prev => prev.map(t => t.id === editingTask ? updatedTask : t));
      setEditingTask(null);
      setEditForm({ title: '', description: '' });
    } catch (err) {
      setError(err.message);
    }
  };

  return {
    tasks,
    loading,
    error,
    editingTask,
    editForm,
    setEditForm,
    handleAddTask,
    handleToggle,
    handleDelete,
    handleDeleteAllCompleted,
    handleStartEdit,
    handleCancelEdit,
    handleSaveEdit
  };
}; 