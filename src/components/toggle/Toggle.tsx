import React from 'react';
import Switch from '@mui/material/Switch';

export interface ToggleProps {
	disabled: boolean;
}

const Toggle = ({ disabled = false, ...props }: ToggleProps) => {
	return <Switch disabled={disabled} defaultChecked />;
};

export default Toggle;
