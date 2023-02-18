import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

export default {
	title: 'Inputs/Button',
	component: Button,
	argTypes: {
		backgroundColor: { control: 'color' }
	}
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	variant: 'primary',
	label: 'Button'
};

export const Secondary = Template.bind({});
Secondary.args = {
	label: 'Button'
};

export const Quiet = Template.bind({});
Quiet.args = {
	variant: 'quiet',
	label: 'Button'
};
