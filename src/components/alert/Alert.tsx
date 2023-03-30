import React, { PropsWithChildren } from 'react';

import { Badge } from '@mui/material';

export interface AlertProps {
	value?: number | string | React.ReactNode;
	max?: number;
	variant?: 'standard' | 'dot';
	posX?: 'left' | 'right';
	posY?: 'top' | 'bottom';
	showZero?: boolean;
	invisible?: boolean;
	overlap?: 'circular' | 'rectangular';
	bgColor?: string;
	textColor?: string;
}

const Alert = (props: PropsWithChildren<AlertProps>) => {
	const { value = 0, posX = 'right', posY = 'top' } = props;

	const style = {
		'& .MuiBadge-badge': {
			backgroundColor: props.bgColor ? props.bgColor : '#C62828',
			color: props.textColor
		}
	};

	return (
		<Badge
			badgeContent={value}
			variant={props.variant}
			invisible={props.invisible}
			showZero={props.showZero}
			max={props.max}
			overlap={props.overlap}
			color="primary"
			anchorOrigin={{
				vertical: posY,
				horizontal: posX
			}}
			sx={style}
		>
			{props.children}
		</Badge>
	);
};

export default Alert;
