import React from 'react';
import { List, Divider, Typography } from '@mui/material';
import { TaskItem } from './TaskItem';

export const TaskList = ({ 
  tasks, 
  onToggle, 
  onDelete, 
  onEdit, 
  onSave, 
  onCancel,
  editingTask,
  editForm,
  onEditFormChange
}) => {
  if (tasks.length === 0) {
    return (
      <Typography variant="body1" color="text.secondary" align="center" sx={{ py: 4 }}>
        No tasks yet. Add some tasks to get started!
      </Typography>
    );
  }

  return (
    <List sx={{ 
      width: '100%', 
      bgcolor: 'background.paper',
      borderRadius: 1
    }}>
      {tasks.map((task, index) => (
        <React.Fragment key={task.id}>
          {index > 0 && <Divider />}
          <TaskItem
            task={task}
            onToggle={onToggle}
            onDelete={onDelete}
            onEdit={onEdit}
            onSave={onSave}
            onCancel={onCancel}
            isEditing={editingTask === task.id}
            editForm={editForm}
            onEditFormChange={onEditFormChange}
          />
        </React.Fragment>
      ))}
    </List>
  );
}; 