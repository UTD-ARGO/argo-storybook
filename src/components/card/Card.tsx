import React, { PropsWithChildren } from 'react';
import {
	Card as MUICard,
	CardContent,
	Typography,
	IconButton,
	TableContainer,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	SxProps
} from '@mui/material';
import { Print, Email } from '@mui/icons-material';

import Tab from '../tab/Tab';
import Dropdown from '../dropdown/Dropdown';

export interface CardProps {
	variant?: 'default' | 'criteria' | 'summary' | 'chart';
	title?: string | React.ReactNode;
	tabs?: string[];
	titleButtons?: React.ReactNode;
	criteriaData?: any;
	style: SxProps;
}

const Card = (props: PropsWithChildren<CardProps>) => {
	if (!props.variant) props.variant = 'default';

	return (
		<MUICard
			sx={{
				minWidth: '50px',
				minHeight: '50px',
				...props.style
			}}
		>
			<CardContent
				sx={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-between',
					alignItems: 'center'
				}}
			>
				{props.title && [
					<Typography variant="h6" lineHeight="20px">
						{props.title}
					</Typography>
				]}
				{props.variant === 'summary' && (
					<IconButton size="small">
						<Print />
					</IconButton>
				)}
				{props.variant === 'chart' && (
					<div
						style={{
							display: 'flex',
							flexDirection: 'row',
							alignItems: 'center',
							marginLeft: '40px'
						}}
					>
						<Dropdown
							label="Nursing Assessment"
							items={['a', 'b', 'c']}
						></Dropdown>
						<IconButton size="small" sx={{ marginLeft: '15px' }}>
							<Email />
						</IconButton>
					</div>
				)}
				{props.titleButtons && props.titleButtons}
			</CardContent>
			<hr
				style={{
					backgroundColor: '#d9d9d9',
					height: '1px',
					border: 'none',
					margin: '0px'
				}}
			></hr>
			{props.tabs && <Tab labels={props.tabs} />}
			{props.variant === 'criteria' && (
				<CardContent>
					<TableContainer component={Paper}>
						<Table size="small" aria-label="a dense table">
							<TableHead>
								<TableRow>
									<TableCell>Strength</TableCell>
									<TableCell>Description</TableCell>
									<TableCell>Document</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{props.criteriaData &&
									props.criteriaData.map((row: any, i: number) => (
										<TableRow key={i}>
											<TableCell>{row.strength}</TableCell>
											<TableCell>{row.description}</TableCell>
											<TableCell>{row.document}</TableCell>
										</TableRow>
									))}
							</TableBody>
						</Table>
					</TableContainer>
				</CardContent>
			)}
			<CardContent>{props.children}</CardContent>
		</MUICard>
	);
};

export default Card;
