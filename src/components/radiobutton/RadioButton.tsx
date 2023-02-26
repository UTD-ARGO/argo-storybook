import React from 'react';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';


interface RadioButtonProps {
  disabled: boolean;
  label: string;
  error: boolean;
  onClick?: () => void;
}

export const RadioButton = ({
  disabled = false,
  label,
  error = false,
  ...props
}: RadioButtonProps) => {
    const style = { '&.MuiRadio-root': { color: error ? '#C62828' : '#0000ff'}}
  return (
    <FormControlLabel disabled={disabled} control={<Radio sx={disabled ? null: style}
    />} label={label} />
  );
};