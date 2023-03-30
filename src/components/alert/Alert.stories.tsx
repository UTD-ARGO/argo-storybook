import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Alert from './Alert';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { IconButton } from '@mui/material';

export default {
	title: 'Feedback/Alert',
	component: Alert
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => (
	<IconButton>
		<Alert {...args}>
			<NotificationsIcon fontSize="large" />
		</Alert>
	</IconButton>
);

export const Default = Template.bind({});
Default.args = {
	value: 1,
	max: 10,
	variant: 'standard',
	posX: 'right',
	posY: 'top',
	showZero: false,
	overlap: 'rectangular'
};
