import React from 'react';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';

export interface RadioButtonProps {
	disabled: boolean;
	label: string;
	error: boolean;
	color?: string;
	size?: 'small' | 'medium';
	onClick?: () => void;
}

const RadioButton = ({
	disabled = false,
	label,
	error = false,
	color = '#0000ff',
	size = "medium",
	...props
}: RadioButtonProps) => {
	const style = { 
	'&.MuiRadio-root': { 
		color: error ? '#C62828' : color }
	};
	return (
		<FormControlLabel
			disabled={disabled}
			control={<Radio size={size} sx={disabled ? null : style} />}
			label={label}
		/>
	);
};

export default RadioButton;
