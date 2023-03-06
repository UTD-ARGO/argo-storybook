import React from 'react';
import Card, { CardProps } from './Card';
import {
	TableContainer,
	Paper,
	Table,
	TableHead,
	TableRow,
	TableCell,
	TableBody
} from '@mui/material';

export interface CriCardProps extends CardProps {
	data?: CriData[];
}

export interface CriData {
	str: string;
	desc: string;
	doc: string;
}

const CriteriaCard = (args: CriCardProps) => {
	let data = args.data;
	if (!data) data = [];

	return (
		<Card title="Criteria" style={{ display: 'inline-block' }} {...args}>
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
						{data.map((row: CriData, i: number) => (
							<TableRow key={row.desc}>
								<TableCell>{row.str}</TableCell>
								<TableCell>{row.desc}</TableCell>
								<TableCell>{row.doc}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Card>
	);
};

export default CriteriaCard;
