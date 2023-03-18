import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import LeftNavigation, { LNItem } from './LeftNavigation';
import {
	Group,
	CalendarToday,
	Email,
	Leaderboard,
	Info,
	HelpOutline,
	AccountCircleOutlined
} from '@mui/icons-material';
import { IconButton } from '@mui/material';

export default {
	title: 'Navigation/Left Navigation Menu',
	component: LeftNavigation
} as ComponentMeta<typeof LeftNavigation>;

const Template: ComponentStory<typeof LeftNavigation> = (args) => (
	<LeftNavigation {...args} />
);

export const SideRail = Template.bind({});
const items = [
	{ label: 'Patients', icon: <Group />, onClick: () => {} },
	{ label: 'Schedule', icon: <CalendarToday />, onClick: () => {} },
	{ label: 'Messaging', icon: <Email />, onClick: () => {} },
	{ label: 'Reports', icon: <Leaderboard />, onClick: () => {} },
	{ label: 'About', icon: <Info />, onClick: () => {} },
	{ label: 'Help', icon: <HelpOutline />, onClick: () => {} }
] as LNItem[];

SideRail.args = {
	listItems: items,
	footerItem: (
		<IconButton>
			<AccountCircleOutlined fontSize="large" />
		</IconButton>
	)
};
