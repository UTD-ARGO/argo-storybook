import React, { PropsWithChildren } from 'react';
import {
	Card as MUICard,
	CardContent,
	Typography,
	SxProps
} from '@mui/material';

import Tab from '../tab/Tab';

import './Card.css';

export interface CardProps {
	title?: string;
	titleBar?: React.ReactNode;
	footerBar?: React.ReactNode;
	tabs?: string[];
	centerContent?: boolean;
	style?: SxProps;
}

const Card = (props: PropsWithChildren<CardProps>) => {
	const centerStyle = props.centerContent
		? { ...styles.cardCenterContent }
		: {};
	return (
		<MUICard className="card" sx={{ ...styles.card, ...props.style }}>
			{(props.title || props.titleBar) && [
				<CardContent sx={{ ...styles.cardContent }}>
					{props.title && [
						<Typography
							variant="h6"
							lineHeight="20px"
							sx={{ width: 'fit-content', whiteSpace: 'nowrap' }}
						>
							{props.title}
						</Typography>
					]}
					<div className="card-titlebar">{props.titleBar}</div>
				</CardContent>,
				<hr />
			]}
			{props.tabs && <Tab labels={props.tabs} />}
			<CardContent sx={{ ...styles.cardChildContent, ...centerStyle }}>
				{props.children}
			</CardContent>
			{props.footerBar && [
				<hr />,
				<CardContent sx={{ ...styles.cardContent }}>
					{props.footerBar}
				</CardContent>
			]}
		</MUICard>
	);
};

const styles = {
	card: {
		minWidth: '50px',
		minHeight: '50px',
		display: 'flex',
		flexDirection: 'column'
	},
	cardContent: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		'&:last-child': {
			padding: '16px'
		}
	},
	cardChildContent: {
		flex: 1
	},
	cardCenterContent: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		textAlign: 'center'
	}
} as { [key: string]: React.CSSProperties };

export default Card;
