import React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export interface TextFieldProps {
	autoFocus?: boolean;
	disabled?: boolean;
	label: string;
	error?: boolean;
	color?: string;
	helperText?: string;
	margin?: 'dense' | 'none' | 'normal';
	multiline?: boolean;
	rows?: string;
	placeholder?: string;
	required?: boolean;
	size?: 'small' | 'medium';
	value?: any;
	onClick?: () => void;
}

const TextField = ({
	autoFocus,
	disabled,
	label,
	error,
	color,
	helperText,
	margin,
	multiline,
	rows,
	placeholder,
	required,
	size,
	value,
	onClick,
	...props
}: TextFieldProps) => {
	return (
		<h1> hello </h1>
	);
};

export default TextField;