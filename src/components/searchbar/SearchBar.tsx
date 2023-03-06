import React from 'react';
import './searchBar.css';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';

export interface SearchBarProps {
	variant?: 'outlined' | 'contained' | 'underlined';
	disabled?: boolean;
	label: string;
	error?: boolean;
	className?: string;
	onClick?: () => void;
}

const SearchBar = ({
	variant,
	disabled = false,
	label,
	error = false,
	className,
	...props
}: SearchBarProps) => {
	const mode = `searchbar--${variant}`;
	const errorStyle = { color: error ? '#C62828' : null };
	return (
		<Box component="form" sx={{ margin: '0px' }}>
			<TextField
				placeholder={label}
				disabled={disabled}
				error={error}
				size="small"
				variant={variant === 'outlined' ? 'outlined' : 'standard'}
				InputProps={{
					className: className ? className : ['searchbar', mode].join(' '),
					sx: error ? errorStyle : null,
					startAdornment: (
						<InputAdornment position="start">
							<SearchIcon sx={error ? errorStyle : null} />
						</InputAdornment>
					),
					...(variant !== 'outlined' &&
						variant === 'contained' && { disableUnderline: true })
				}}
			/>
		</Box>
	);
};

export default SearchBar;
