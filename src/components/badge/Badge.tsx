import React from 'react';
import './badge.css';
import Chip from '@mui/material/Chip';

interface BadgeProps {
	variant?: 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
	label: string;
}

export const Badge = ({
	variant,
	label,
  ...props
}: BadgeProps) => {
	return (
		<Chip 
		label={label}
		color={variant}
		/>
	);
};
