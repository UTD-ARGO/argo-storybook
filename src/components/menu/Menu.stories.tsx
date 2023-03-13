import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Menu from './Menu';

export default {
  title: 'Navigation/Menu',
  component: Menu,
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Menu> = (args) => <Menu {...args} />;

const items = ["option 1", "option 2", "option 3"];
export const Default = Template.bind({});
Default.args = {
  variant: 'default',
  options: items,
};

export const CheckMenu = Template.bind({});
CheckMenu.args = {
  variant: 'checkmenu',
  options: items,
};

export const RadioMenu = Template.bind({});
RadioMenu.args = {
  variant: 'radiomenu',
  options: items,
};

export const ToggleMenu = Template.bind({});
ToggleMenu.args = {
  variant: 'togglemenu',
  options: items,
};