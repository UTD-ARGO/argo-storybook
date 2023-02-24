import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import './Dropdown.css'

interface DropdownProps {
    label: string,
    items: any[]
}

export default function Dropdown({
    label, items, ...props
}: DropdownProps) {

  const [item, selectItem] = React.useState('');
  const handleChange = (event: SelectChangeEvent) => {
    selectItem(event.target.value);
  };

  return (
    <Box className="dropdown-container">
    <FormControl fullWidth>
        <InputLabel id="dropdown-label">Age</InputLabel>
        <Select
          labelId="dropdown-label"
          id="dropdown"
          value={item}
          label={label}
          onChange={handleChange}
          className="dropdown"
        >

        {items.map(item => (
            <MenuItem value={item}>{item}</MenuItem>
        ))}
        </Select>
      </FormControl>
    </Box>
  );
}