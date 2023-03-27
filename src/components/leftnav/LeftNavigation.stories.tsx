import { ComponentMeta, ComponentStory } from '@storybook/react';

import LeftNavigation, { LNItem } from './LeftNavigation';
import {
	Group,
	CalendarToday,
	Email,
	Leaderboard,
	Info,
	HelpOutline
} from '@mui/icons-material';

export default {
	title: 'Navigation/Left Navigation Menu',
	component: LeftNavigation
} as ComponentMeta<typeof LeftNavigation>;

// Left Nav fits to 100% height of parent container
// Used 90vh to show example story
const Template: ComponentStory<typeof LeftNavigation> = (args) => (
	<div style={{ height: '90vh' }}>
		<LeftNavigation {...args} />
	</div>
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
	listItems: items
};
