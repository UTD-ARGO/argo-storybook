import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { BadgeChip } from './BadgeChip';

export default {
	title: 'Inputs/BadgeChip',
	component: BadgeChip
} as ComponentMeta<typeof BadgeChip>;

const Template: ComponentStory<typeof BadgeChip> = (args) => <BadgeChip {...args} />;

export const Default = Template.bind({});
Default.args = {
	variant: 'default',
	label: 'Default'
};

export const Primary = Template.bind({});
Primary.args = {
	variant: 'primary',
	label: 'Primary'
};

export const Success = Template.bind({});
Success.args = {
	variant: 'success',
	label: 'Success'
};

export const Warning = Template.bind({});
Warning.args = {
	variant: 'warning',
	label: 'Warning'
};

export const Error = Template.bind({});
Error.args = {
	variant: 'error',
	label: 'Error'
};;
