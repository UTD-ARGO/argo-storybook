import React from 'react';
import Box from '@mui/material/Box';
import MUITextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

export interface TextFieldProps {
	variant?: 'default' | 'calendar-icon';
	label?: string;
	maxLength?: number;
	width?: number;
	disabled?: boolean;
	error?: boolean;
	helperText?: string;
	margin?: 'dense' | 'none' | 'normal';
	multiline?: boolean;
	rows?: string;
	required?: boolean;
	size?: 'small' | 'medium';
	value?: any;
	onChange?: (e: any) => void;
	onClick?: () => void;
}

const TextField = ({
	variant,
	label,
	maxLength,
	width = 201,
	disabled,
	error,
	helperText,
	margin,
	multiline,
	rows,
	required,
	size,
	value,
	onChange,
	onClick,
	...props
}: TextFieldProps) => {
	return (
	<Box sx={{ width: {width} }}>
		<MUITextField 
		fullWidth
		label={label} 
		disabled={disabled}
		error={error}
		helperText={helperText}
		margin={margin}
		multiline={multiline}
		rows={rows}
		required={required}
		size={size}
		value={value}
		onChange={onChange}
		inputProps={{ maxLength: maxLength }}
		variant="outlined"
        InputProps={{
			...(variant === 'calendar-icon' && 
			{ endAdornment: <InputAdornment position="end">
			<CalendarTodayIcon 
				fontSize="small"
				onClick={onClick} />
			</InputAdornment>})
		}}
		/>
	</Box>
	);
};

export default TextField;