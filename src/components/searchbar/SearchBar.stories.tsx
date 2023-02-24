import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SearchBar } from './SearchBar';

export default {
	title: 'Inputs/SearchBar',
	component: SearchBar
} as ComponentMeta<typeof SearchBar>;

const Template: ComponentStory<typeof SearchBar> = (args) => (
	<SearchBar {...args} />
);

export const Outlined = Template.bind({});
Outlined.args = {
	variant: 'outlined',
	label: 'Search'
};

export const Contained = Template.bind({});
Contained.args = {
	variant: 'contained',
	label: 'Search'
};

export const Underlined = Template.bind({});
Underlined.args = {
	variant: 'underlined',
	label: 'Search'
};
