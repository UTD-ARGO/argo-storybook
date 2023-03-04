import React from 'react';
import Card from './Card';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
	title: 'Surfaces/Card',
	component: Card
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = { variant: 'default' };

export const Criteria = Template.bind({});
Criteria.args = { variant: 'criteria' };

export const Summary = Template.bind({});
Summary.args = { variant: 'summary' };

export const Chart = Template.bind({});
Chart.args = { variant: 'chart' };
