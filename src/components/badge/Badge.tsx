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
}

const Badge = ({ variant, label, ...props }: BadgeProps) => {
	return <Chip label={label} color={variant} />;
};

export default Badge;
