import React from 'react';
import Switch from '@mui/material/Switch';

interface ToggleProps {
	disabled: boolean;
}

export const Toggle = ({
  disabled=false,
  ...props
}: ToggleProps) => {
  return (
	<Switch disabled={disabled} defaultChecked />
  );
};