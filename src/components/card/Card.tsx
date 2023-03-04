import React from 'react';
import './Card.css';
import {
	Card as MUICard,
	CardContent,
	Typography,
	CardActions,
	Button
} from '@mui/material';

export interface CardProps {
	variant?: 'default' | 'criteria' | 'summary' | 'chart';
	width?: string;
}

const Card = ({ variant, width = 'auto' }: CardProps) => {
	return (
		<MUICard sx={{ width }}>
			<CardContent>
				<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
					Word of the Day
				</Typography>
				<Typography variant="h5" component="div">
					benevolent
				</Typography>
				<Typography sx={{ mb: 1.5 }} color="text.secondary">
					adjective
				</Typography>
				<Typography variant="body2">
					well meaning and kindly.
					<br />
					{'"a benevolent smile"'}
				</Typography>
			</CardContent>
			<CardActions>
				<Button size="small">Learn More</Button>
			</CardActions>
		</MUICard>
	);
};

export default Card;
