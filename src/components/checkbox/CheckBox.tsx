import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import MUICheckbox from '@mui/material/Checkbox';

export interface CheckboxProps {
	checked?: boolean;
	variant?: 'default' | 'partial';
	disabled?: boolean;
	label: string;
	error?: boolean;
	color?: string;
	size?: 'small' | 'medium';
	onChange?: (e: any) => void;
}

const Checkbox = ({
	checked,
	variant,
	disabled = false,
	label,
	error = false,
	color = '#0000ff',
	size = 'medium',
	onChange,
	...props
}: CheckboxProps) => {
	const style = {
		'&.MuiCheckbox-root': { color: error ? '#C62828' : color }
	};
	const state = variant === 'partial' ? true : false;
	return (
		<FormGroup>
			<FormControlLabel
				disabled={disabled}
				control={<MUICheckbox 
					onChange={onChange}
					checked={checked} 
					size={size} 
					indeterminate={state} 
					sx={style} />}
				label={label}
			/>
		</FormGroup>
	);
};

export default Checkbox;
