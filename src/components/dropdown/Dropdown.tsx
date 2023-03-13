import * as React from 'react';
import {
	Box,
	InputLabel,
	MenuItem,
	FormControl,
	Select,
	SelectChangeEvent
} from '@mui/material';
import './Dropdown.css';

export interface DropdownProps {
	label: string;
	items: any[];
	size?: 'small' | 'medium';
	width?: number;
}

export default function Dropdown({ label, items, size, width = 210, ...props }: DropdownProps) {
	const [item, selectItem] = React.useState('');
	const handleChange = (event: SelectChangeEvent) => {
		selectItem(event.target.value);
	};

	return (
		<Box sx={{ width: {width} }}>
			<FormControl fullWidth size={size}>
				<InputLabel id="dropdown-label">{label}</InputLabel>
				<Select
					labelId="dropdown-label"
					id="dropdown"
					value={item}
					label={label}
					onChange={handleChange}
					className="dropdown"
				>
					{items.map((item) => (
						<MenuItem key={item} value={item}>
							{item}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</Box>
	);
}
