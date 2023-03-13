import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import RadioButton from './RadioButton';

export default {
	title: 'Inputs/RadioButton',
	component: RadioButton
} as ComponentMeta<typeof RadioButton>;

const Template: ComponentStory<typeof RadioButton> = (args) => (
	<RadioButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
};
