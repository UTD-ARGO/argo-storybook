import React, { PropsWithChildren } from 'react';
import {
	Card as MUICard,
	CardContent,
	Typography,
	SxProps
} from '@mui/material';

import Tab from '../tab/Tab';

export interface CardProps {
	title?: string;
	titleBar?: React.ReactNode;
	footerBar?: React.ReactNode;
	tabs?: string[];
	style?: SxProps;
}

const Card = (props: PropsWithChildren<CardProps>) => {
	return (
		<MUICard sx={{ ...styles.card, ...props.style }}>
			{(props.title || props.titleBar) && [
				<CardContent sx={styles.cardContent}>
					{props.title && [
						<Typography
							variant="h6"
							lineHeight="20px"
							sx={{ width: 'fit-content', whiteSpace: 'nowrap' }}
						>
							{props.title}
						</Typography>
					]}
					<div style={styles.titlebar}>{props.titleBar}</div>
				</CardContent>,
				<hr style={styles.hr}></hr>
			]}
			{props.tabs && <Tab labels={props.tabs} />}
			<CardContent>{props.children}</CardContent>
			{props.footerBar && [
				<hr style={styles.hr}></hr>,
				<CardContent sx={styles.cardContent}>{props.footerBar}</CardContent>
			]}
		</MUICard>
	);
};

const styles = {
	card: {
		minWidth: '50px',
		minHeight: '50px'
	},
	cardContent: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		'&:last-child': {
			padding: '16px'
		}
	},
	hr: {
		backgroundColor: '#d9d9d9',
		height: '1px',
		border: 'none',
		margin: '0px'
	},
	titlebar: {
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center'
	}
} as { [key: string]: React.CSSProperties };

export default Card;
