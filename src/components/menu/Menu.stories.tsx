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
  buttonLabel: "DEFAULT MENU",
  options: items,
};

export const CheckMenu = Template.bind({});
CheckMenu.args = {
  variant: 'checkmenu',
  buttonLabel: "CHECKBOX MENU",
  options: items,
};

export const RadioMenu = Template.bind({});
RadioMenu.args = {
  variant: 'radiomenu',
  buttonLabel: "RADIO BUTTON MENU",
  options: items,
};

export const ToggleMenu = Template.bind({});
ToggleMenu.args = {
  variant: 'togglemenu',
  buttonLabel: "TOGGLE MENU",
  options: items,
};