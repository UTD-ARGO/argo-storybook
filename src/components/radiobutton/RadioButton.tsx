import React from 'react';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';

export interface RadioButtonProps {
	checked?: boolean;
	value?: string;
	disabled?: boolean;
	error?: boolean;
	color?: string;
	size?: 'small' | 'medium';
	onChange?: (e: any) => void;
}

const RadioButton = ({
	checked,
	value,
	disabled = false,
	error = false,
	color = '#0000ff',
	size = "medium",
	onChange,
	...props
}: RadioButtonProps) => {
	const style = { 
	'&.MuiRadio-root': { 
		color: error ? '#C62828' : color }
	};
	return (
		<Radio
			onChange={onChange}
			checked={checked} 
			value={value} 
			disabled={disabled}
			size={size} 
			sx={disabled ? null : style} />
	);
};

export default RadioButton;
