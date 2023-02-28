import React from 'react';
import './badge.css';
import Chip from '@mui/material/Chip';

export interface BadgeProps {
	variant?:
		| 'default'
		| 'primary'
		| 'secondary'
		| 'error'
		| 'info'
		| 'success'
		| 'warning';
	label: string;
	size?: 'small' | 'medium';
}

const Badge = ({ variant, label, size, ...props }: BadgeProps) => {
	return <Chip label={label} color={variant} size={size}/>;
};

export default Badge;
