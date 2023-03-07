import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Tab from './Tab';

export default {
	title: 'Navigation/Tab',
	component: Tab
} as ComponentMeta<typeof Tab>;

export const Primary = {
	args: {
		labels: ['Tab1', 'Tab2', 'Tab3']
	}
};
