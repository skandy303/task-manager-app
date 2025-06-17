import React, { useState } from 'react';
import { 
  Container, 
  Typography, 
  Paper, 
  Box, 
  CircularProgress,
  Alert,
  Fab,
  Button,
  Stack
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { TaskList } from '../components/TaskList';
import { AddTaskDialog } from '../components/AddTaskDialog';
import { SearchBar } from '../components/SearchBar';
import { useTasks } from '../hooks/useTasks';

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    minHeight: '100vh',
    bgcolor: 'background.default',
    position: 'relative'
  },
  container: {
    mt: 4,
    mb: 4,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  paper: {
    p: 3,
    width: '100%',
    maxWidth: 800,
    minWidth: 320
  },
  title: {
    fontWeight: 'bold',
    color: 'primary.main',
    mb: 3,
    textAlign: 'center'
  },
  searchContainer: {
    mb: 3
  },
  deleteButton: {
    whiteSpace: 'nowrap',
    pr: 3,
    pl: 3
  },
  fab: {
    position: 'fixed',
    bottom: 24,
    right: 24
  }
};

export default function TaskManager() {
  const [openDialog, setOpenDialog] = useState(false);
  const [newTask, setNewTask] = useState({ title: '', description: '' });
  const [searchTerm, setSearchTerm] = useState('');

  const {
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
  } = useTasks();

  const hasCompletedTasks = tasks.some(task => task.completed);
  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (task.description || '').toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddTaskSubmit = async () => {
    const success = await handleAddTask(newTask);
    if (success) {
      setOpenDialog(false);
      setNewTask({ title: '', description: '' });
    }
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Alert severity="error">{error}</Alert>
      </Container>
    );
  }

  return (
    <Box sx={styles.root}>
      <Container maxWidth="md" sx={styles.container}>
        <Paper elevation={3} sx={styles.paper}>
          <Typography variant="h4" component="h1" gutterBottom sx={styles.title}>
            Task Manager
          </Typography>

          <Stack direction="row" spacing={2} sx={styles.searchContainer}>
            <SearchBar value={searchTerm} onChange={setSearchTerm} />
            {hasCompletedTasks && (
              <Button
                variant="outlined"
                color="error"
                onClick={handleDeleteAllCompleted}
                sx={styles.deleteButton}
              >
                Delete Completed
              </Button>
            )}
          </Stack>

          <TaskList
            tasks={filteredTasks}
            onToggle={handleToggle}
            onDelete={handleDelete}
            onEdit={handleStartEdit}
            onSave={handleSaveEdit}
            onCancel={handleCancelEdit}
            editingTask={editingTask}
            editForm={editForm}
            onEditFormChange={setEditForm}
          />
        </Paper>
      </Container>

      <Fab 
        color="primary" 
        aria-label="add"
        onClick={() => setOpenDialog(true)}
        sx={styles.fab}
      >
        <AddIcon />
      </Fab>

      <AddTaskDialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        onSubmit={handleAddTaskSubmit}
        task={newTask}
        onTaskChange={setNewTask}
      />
    </Box>
  );
} 