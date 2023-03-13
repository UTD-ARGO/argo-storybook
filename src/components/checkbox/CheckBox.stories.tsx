import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Checkbox from './Checkbox';

export default {
	title: 'Inputs/Checkbox',
	component: Checkbox
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
	<Checkbox {...args} />
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
