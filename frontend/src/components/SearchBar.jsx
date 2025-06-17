import React from 'react';
import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export const SearchBar = ({ value, onChange, placeholder = 'Search tasks...' }) => (
  <TextField
    fullWidth
    variant="outlined"
    size="small"
    placeholder={placeholder}
    value={value}
    onChange={e => onChange(e.target.value)}
    sx={{ mb: 3 }}
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          <SearchIcon />
        </InputAdornment>
      ),
    }}
  />
); 