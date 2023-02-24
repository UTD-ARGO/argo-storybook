import React from 'react';
import './badgechip.css';
import Chip from '@mui/material/Chip';

interface BadgeChipProps {
	variant?: 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
	label: string;
}

export const BadgeChip = ({
	variant,
	label,
  ...props
}: BadgeChipProps) => {
	return (
		<Chip 
		label={label}
		color={variant}
		/>
	);
};
