import React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export interface CheckBoxProps {
	variant?: 'default' | 'partial';
	disabled: boolean;
	label: string;
	error: boolean;
	color?: string;
	size?: 'small' | 'medium';
	onClick?: () => void;
}

const CheckBox = ({
	variant,
	disabled = false,
	label,
	error = false,
	color = '#0000ff',
	size = 'medium',
	...props
}: CheckBoxProps) => {
	const style = {
		'&.MuiCheckbox-root': { color: error ? '#C62828' : color }
	};
	const state = variant === 'partial' ? true : false;
	return (
		<FormGroup>
			<FormControlLabel
				disabled={disabled}
				control={<Checkbox defaultChecked size={size} indeterminate={state} sx={style} />}
				label={label}
			/>
		</FormGroup>
	);
};

export default CheckBox;
