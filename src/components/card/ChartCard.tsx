import React from 'react';
import Card, { CardProps } from './Card';
import { IconButton } from '@mui/material';
import { Email } from '@mui/icons-material';
import Dropdown from '../dropdown/Dropdown';

const ChartCard = (args: CardProps) => (
	<Card
		title="Chart Documents"
		titleBar={
			<div
				style={{
					marginLeft: 'auto',
					paddingLeft: '30px',
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'center'
				}}
			>
				<Dropdown label="Nursing Assessment" items={['a', 'b', 'c']} />
				<IconButton size="small" sx={{ marginLeft: '15px' }}>
					<Email />
				</IconButton>
			</div>
		}
		footerBar={undefined}
		style={{ display: 'inline-block' }}
		{...args}
	>
		<div style={{ height: '200px' }}>Content goes here</div>
	</Card>
);

export default ChartCard;
