import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Badge } from './Badge';

export default {
  title: 'Example/Badge',
  component: Badge,
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const Default = Template.bind({});
Default.args = {
	variant: 'default',
	label: 'Default Label',
};

export const Primary = Template.bind({});
Primary.args = {
	variant: 'primary',
	label: 'Primary Label',
};

export const Success = Template.bind({});
Success.args = {
	variant: 'success',
	label: 'Success Label',
};

export const Warning = Template.bind({});
Warning.args = {
	variant: 'warning',
	label: 'Warning Label',
};

export const Danger = Template.bind({});
Danger.args = {
	variant: 'danger',
	label: 'Danger Label',
};