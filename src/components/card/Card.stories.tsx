import React from 'react';
import Card from './Card';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SearchBar from '../searchbar/SearchBar';
import { IconButton } from '@mui/material';
import { FilterList } from '@mui/icons-material';

export default {
	title: 'Surfaces/Card',
	component: Card
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args}></Card>;

export const Default = Template.bind({});
const defaultChildren: React.ReactNode = (
	<div style={{ height: '200px' }}>Content goes here</div>
);
Default.args = {
	variant: 'default',
	title: 'Default',
	children: defaultChildren
};

export const Criteria = Template.bind({});
const criData = [
	{ strength: 'A', description: 'Description A', document: 'AA' },
	{ strength: 'B', description: 'Description B', document: 'BB' },
	{ strength: 'C', description: 'Description C', document: 'CC' }
];
Criteria.args = {
	variant: 'criteria',
	title: 'Criteria',
	criteriaData: criData,
	style: { display: 'inline-block' }
};

export const Summary = Template.bind({});
Summary.args = {
	variant: 'summary',
	title: 'Summary',
	tabs: ['Initial Auth', 'Case History', 'Chart Check'],
	children: defaultChildren,
	style: { display: 'inline-block' }
};

export const Chart = Template.bind({});
Chart.args = {
	variant: 'chart',
	title: 'Chart Documents',
	children: defaultChildren,
	style: { display: 'inline-block' }
};

export const TimeSeries = Template.bind({});
const title: React.ReactNode = (
	<div style={{ display: 'flex', flexDirection: 'row' }}>
		<h4>Time Series</h4>
		<SearchBar label="Search Stocks" variant="outlined"></SearchBar>
	</div>
);
const timeTitleButtons: React.ReactNode = (
	<IconButton size="small">
		<FilterList />
	</IconButton>
);
TimeSeries.args = {
	variant: 'default',
	title: title,
	titleButtons: timeTitleButtons,
	children: defaultChildren,
	style: { display: '' }
};
