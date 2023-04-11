import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CustomTab from '../tab/CustomTab';
import Header from './Header';

export default {
	title: 'Surfaces/Header',
	component: Header,
	argTypes: {
		backgroundColor: { control: 'color' }
	}
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Global = Template.bind({});
Global.args = {
	title: 'Title',
	variant: 'global',
	backgroundColor: 'steelblue'
};

const tabData = [
	{ label: "MOVIES", options: ["Action", "Comedy", "Drama"] },
	{ label: "TV SHOWS", options: ["Crime", "Fantasy", "Mystery", "Sci-Fi"] },
	{ label: "NEWS", options: ["World", "Politics", "Sports"] },
	{ label: "NAME", options: ["John", "Jane", "Bob", "Sue", "Tom"] },
];

const menuOptions = []

export const GlobalTabs = Template.bind({});
GlobalTabs.args = {
	title: 'Title',
	variant: 'global-tabs',
	backgroundColor: 'steelblue',
	titleFontWeight: '500',
	customTab: (
		<CustomTab
			labels={['MOVIES', 'TV SHOWS', 'NEWS', 'NAME']}
			fontColor="#fff"
			fontSize="18px"
			hoverColor="#fff"
			borderRadius="4px"
			height="62px"
		/>
	),
};

export const Basic = Template.bind({});
Basic.args = {
	title: 'Title',
	variant: 'basic',
	backgroundColor: 'white'
};

export const Button = Template.bind({});
Button.args = {
	title: 'Title',
	variant: 'button',
	backgroundColor: 'white',
	buttonLabel: 'Action'
};

export const Tab = Template.bind({});
Tab.args = {
	variant: 'tab',
	tabs: ['Home', 'Products', 'Profile'],
	buttonLabel: 'Action',
	backgroundColor: 'white'
};
