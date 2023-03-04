import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import List from './List';

export default {
  title: 'Inputs/List',
  component: List,
} as ComponentMeta<typeof List>;

const Template: ComponentStory<typeof List> = (args) => <List {...args} />;

const items = [10, 20, 30];
export const Default = Template.bind({});
Default.args = {
  variant: 'default',
  listItems: items,
};

export const CheckList = Template.bind({});
CheckList.args = {
  variant: 'checklist',
  listItems: items,
};

export const RadioList = Template.bind({});
RadioList.args = {
  variant: 'radiolist',
  listItems: items,
};

export const ToggleList = Template.bind({});
ToggleList.args = {
  variant: 'togglelist',
  listItems: items,
};