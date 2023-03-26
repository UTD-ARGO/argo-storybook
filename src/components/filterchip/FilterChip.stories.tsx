import { ComponentStory, ComponentMeta } from '@storybook/react';
import FilterChip from './FilterChip';

export default {
	title: 'Inputs/FilterChip',
	component: FilterChip
} as ComponentMeta<typeof FilterChip>;

const Template: ComponentStory<typeof FilterChip> = (args) => (
	<FilterChip {...args} />
);

export const Default = Template.bind({});
Default.args = { value: 'Filter' };
