import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField
} from '@mui/material';

export const AddTaskDialog = ({ 
  open, 
  onClose, 
  onSubmit, 
  task, 
  onTaskChange 
}) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add New Task</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Title"
          type="text"
          required
          fullWidth
          variant="outlined"
          value={task.title}
          onChange={(e) => onTaskChange({ ...task, title: e.target.value })}
          sx={{ mb: 2 }}
        />
        <TextField
          margin="dense"
          label="Description"
          type="text"
          fullWidth
          variant="outlined"
          multiline
          rows={4}
          value={task.description}
          onChange={(e) => onTaskChange({ ...task, description: e.target.value })}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button 
          onClick={onSubmit}
          variant="contained"
          disabled={!task.title.trim()}
        >
          Add Task
        </Button>
      </DialogActions>
    </Dialog>
  );
}; 