import React from 'react';
import Switch from '@mui/material/Switch';

export interface ToggleProps {
	disabled: boolean;
	color?: string;
	size?: 'small' | 'medium';
}

const Toggle = ({ disabled = false, color, size = 'medium', ...props }: ToggleProps) => {
	const style = {
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: color,
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: color,
  },
	};
	return <Switch sx={style} size={size} disabled={disabled} defaultChecked />;
};

export default Toggle;
