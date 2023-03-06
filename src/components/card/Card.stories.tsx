import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { IconButton, TextField, InputAdornment, Button } from '@mui/material';
import { FilterList, Search } from '@mui/icons-material';

import Card from './Card';
import ChartCard from './ChartCard';
import SummaryCard from './SummaryCard';
import CriteriaCard, { CriData } from './CriteriaCard';

export default {
	title: 'Surfaces/Card',
	component: Card
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args}></Card>;

export const Default = Template.bind({});
Default.args = { style: { width: 400, height: 400 } };

export const Sectioned = Template.bind({});
const sectionChildren: React.ReactNode = (
	<div style={{ height: '200px' }}>Body</div>
);
const sectionFooter: React.ReactNode = <p style={{ margin: '0px' }}>Footer</p>;
Sectioned.args = {
	title: 'Title',
	children: sectionChildren,
	footerBar: sectionFooter
};

export const Chart = ChartCard;

export const Summary = SummaryCard;

const data: CriData[] = [
	{ str: 'A', desc: 'Description A', doc: 'AA AA' },
	{ str: 'B', desc: 'Description B', doc: 'BB BB' },
	{ str: 'C', desc: 'Description C', doc: 'CC CC' }
];
const TemplateCri: ComponentStory<typeof CriteriaCard> = (args) => (
	<CriteriaCard {...args} />
);
export const Criteria = TemplateCri.bind({});
Criteria.args = {
	data: data
};

export const TimeSeries = Template.bind({});
TimeSeries.args = {
	title: 'Time Series',
	titleBar: (
		<div
			style={{
				width: '100%',
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'space-between'
			}}
		>
			<TextField
				id="outlined-basic"
				placeholder="Search Stocks"
				variant="outlined"
				size="small"
				style={{ marginLeft: '20px' }}
				InputProps={{
					startAdornment: (
						<InputAdornment position="start">
							<Search />
						</InputAdornment>
					)
				}}
			/>
			<IconButton size="small">
				<FilterList />
			</IconButton>
		</div>
	),
	children: sectionChildren,
	style: { display: '' }
};

export const Dialog = Template.bind({});
Dialog.args = {
	title: 'Dialog title',
	footerBar: (
		<div
			style={{
				width: '100%',
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'space-between',
				margin: '0px'
			}}
		>
			<Button variant="text">Cancel</Button>
			<Button variant="contained">Submit</Button>
		</div>
	),
	style: { width: '300px' },
	children: <p style={{ margin: 'auto', textAlign: 'center' }}>Modal Message</p>
};
