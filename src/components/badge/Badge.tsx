import React from 'react';
import './badge.css';

interface BadgeProps {
	variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger';
	label: string;
	onClick?: () => void;
}

export const Badge = ({ variant, label, ...props }: BadgeProps) => {
	const mode = `badge--${variant}`;
	return (
		<h1>
			<span className={['badge', mode].join(' ')} {...props}>
				{label}
			</span>
		</h1>
	);
};
