import React from 'react';
import './searchBar.css';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';

interface SearchBarProps {
  variant?: 'outlined' | 'contained' | 'underlined';
  disabled: boolean;
  label: string;
  error: boolean;
  onClick?: () => void;
}

export const SearchBar = ({
  variant,
  disabled = false,
  label,
  error = false,
  ...props
}: SearchBarProps) => {
  const mode = `searchbar--${variant}`
  const errorStyle = { color: error ? '#C62828' : null }
  return (
    <Box component="form">
      <TextField
        placeholder={label}
        disabled={disabled}
        error={error}
        variant={(variant === 'outlined') ? "outlined" : "standard"}
        InputProps={{
            className: ['searchbar', mode].join(' '),
            sx:errorStyle,
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={errorStyle}/>
            </InputAdornment>
          ),
          ...((variant !== 'outlined' && variant === 'contained') && {disableUnderline: true})
        }}
      />
      </Box>
  );
};