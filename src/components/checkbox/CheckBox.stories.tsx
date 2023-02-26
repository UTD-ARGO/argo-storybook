import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CheckBox } from './CheckBox';

export default {
	title: 'Inputs/CheckBox',
	component: CheckBox
} as ComponentMeta<typeof CheckBox>;

const Template: ComponentStory<typeof CheckBox> = (args) => (
	<CheckBox {...args} />
);

export const Default = Template.bind({});
Default.args = {
	variant: 'default',
	label: 'Label'
};

export const Partial = Template.bind({});
Partial.args = {
	variant: 'partial',
	label: 'Label'
};