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

const menuOptions = [
	['Option 1', 'Option 2', 'Option 3'],
	['Option A', 'Option B', 'Option C', 'Option D'],
	['Option X', 'Option Y', 'Option Z'],
	['Option foo', 'Option bar', 'Option baz', 'Option qux']
  ];
  
export const GlobalTabs = Template.bind({});
GlobalTabs.args = {
	title: 'Title',
	variant: 'global-tabs',
	backgroundColor: 'steelblue',
	titleFontWeight: '500',
	customTab: (
		<CustomTab
			labels={['TAB 1', 'TAB 2', 'TAB 3', 'TAB 4']}
			fontColor="#fff"
			fontSize="18px"
			hoverColor="#fff"
			borderRadius="4px"
			height="62px"
		/>
	),
	menuOptions: menuOptions
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
