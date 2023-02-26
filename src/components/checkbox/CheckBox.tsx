import React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

interface CheckBoxProps {
  variant?: 'default' | 'partial';
  disabled: boolean;
  label: string;
  error: boolean;
  onClick?: () => void;
}

export const CheckBox = ({
  variant,
  disabled = false,
  label,
  error = false,
  ...props
}: CheckBoxProps) => {
    const style = { '&.MuiCheckbox-root': { color: error ? '#C62828' : '#0000ff'}}
    const state = (variant === 'partial') ? true : false
  return (
	 <FormGroup>
      <FormControlLabel disabled={disabled} control={
      <Checkbox defaultChecked indeterminate={state} sx={style} />
      } label={label} />

    </FormGroup>
  );
};