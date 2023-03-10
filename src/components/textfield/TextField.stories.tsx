import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import TextField from './TextField';

export default {
	title: 'Inputs/TextField',
	component: TextField
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => (
	<TextField {...args} />
);

export const Default = Template.bind({});
Default.args = {
	label: 'Label',
	variant: 'default'
};

export const CalendarIcon = Template.bind({});
CalendarIcon.args = {
	label: 'Label',
	variant: 'calendar-icon'
};
