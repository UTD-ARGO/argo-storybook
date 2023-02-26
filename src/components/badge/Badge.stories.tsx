import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Badge } from './Badge';

export default {
	title: 'Inputs/Badge',
	component: Badge
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

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
