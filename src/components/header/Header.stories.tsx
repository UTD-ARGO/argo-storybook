import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

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
