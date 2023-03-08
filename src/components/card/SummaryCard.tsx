import React from 'react';
import Card, { CardProps } from './Card';
import { Print } from '@mui/icons-material';
import { IconButton } from '@mui/material';

const SummaryCard = (args: CardProps) => (
	<Card
		title="Summary"
		titleBar={
			<div style={{ marginLeft: 'auto' }}>
				<IconButton size="small">
					<Print />
				</IconButton>
			</div>
		}
		tabs={['Initial Auth', 'Case History', 'Chart Check']}
		style={{ display: 'inline-block' }}
		{...args}
		footerBar={undefined}
	>
		<div style={{ height: '200px' }}>Content goes here</div>
	</Card>
);

export default SummaryCard;
