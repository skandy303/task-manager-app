import React from 'react';
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Checkbox,
  IconButton,
  Box,
  TextField,
  Typography
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

export const TaskItem = ({ 
  task, 
  onToggle, 
  onDelete, 
  onEdit, 
  onSave, 
  onCancel,
  isEditing,
  editForm,
  onEditFormChange
}) => {
  const labelId = `checkbox-list-label-${task.id}`;

  return (
    <ListItem
      secondaryAction={
        <Box>
          {isEditing ? (
            <>
              <IconButton 
                edge="end" 
                aria-label="save"
                onClick={onSave}
                color="primary"
                sx={{ mr: 1 }}
                disabled={!editForm.title.trim()}
              >
                <CheckIcon />
              </IconButton>
              <IconButton 
                edge="end" 
                aria-label="cancel"
                onClick={onCancel}
                color="error"
              >
                <CloseIcon />
              </IconButton>
            </>
          ) : (
            <>
              <IconButton 
                edge="end" 
                aria-label="edit"
                onClick={() => onEdit(task.id)}
                sx={{ mr: 1 }}
              >
                <EditIcon />
              </IconButton>
              <IconButton 
                edge="end" 
                aria-label="delete"
                onClick={() => onDelete(task.id)}
                color="error"
              >
                <DeleteIcon />
              </IconButton>
            </>
          )}
        </Box>
      }
      disablePadding
    >
      <ListItemButton 
      disableRipple
        onClick={() => !isEditing && onToggle(task.id)} 
        dense
        sx={{
          py: 2,
          '&:hover': {
            bgcolor: isEditing ? 'transparent' : 'action.hover'
          }
        }}
      >
        {!isEditing && (
          <ListItemIcon>
            <Checkbox
              edge="start"
              checked={task.completed}
              tabIndex={-1}
              disableRipple
              sx={{
                '&.Mui-checked': {
                  color: 'primary.main'
                }
              }}
              onChange={() => onToggle(task.id)}
            />
          </ListItemIcon>
        )}
        {isEditing ? (
          <Box sx={{ 
            width: '100%', 
            pr: 8,
            display: 'flex',
            flexDirection: 'column',
            gap: 1
          }}>
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              value={editForm.title}
              onChange={(e) => onEditFormChange({ ...editForm, title: e.target.value })}
              sx={{ mb: 1 }}
            />
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              multiline
              rows={2}
              value={editForm.description}
              onChange={(e) => onEditFormChange({ ...editForm, description: e.target.value })}
            />
          </Box>
        ) : (
          <ListItemText 
            id={labelId} 
            primary={
              <Typography
                variant="subtitle1"
                sx={{
                  textDecoration: task.completed ? 'line-through' : 'none',
                  color: task.completed ? 'text.secondary' : 'text.primary',
                  fontWeight: 'medium'
                }}
              >
                {task.title}
              </Typography>
            }
            secondary={
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  mt: 0.5,
                  textDecoration: task.completed ? 'line-through' : 'none'
                }}
              >
                {task.description || 'No description'}
              </Typography>
            }
          />
        )}
      </ListItemButton>
    </ListItem>
  );
}; 