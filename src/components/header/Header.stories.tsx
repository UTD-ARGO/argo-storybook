import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Header } from './Header';

export default {
  title: 'Inputs/Header',
  component: Header,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Global = Template.bind({});
Global.args = {
  title: 'Title',
  variant: 'global',
  backgroundColor: "steelblue"
};

export const Basic = Template.bind({});
Basic.args = {
  title: 'Title',
  variant: 'basic',
  backgroundColor: "white"
};

export const Button = Template.bind({});
Button.args = {
  title: 'Title',
  variant: 'button',
  backgroundColor: "white",
  buttonLabel: "Action"
};

export const Tab = Template.bind({});
Tab.args = {
  variant: 'tab',
  tabLabel1: "Home",
  tabLabel2: "Products",
  tabLabel3: "Profile",
  buttonLabel: "Action",
  backgroundColor: "white"
};

export const Dropdown = Template.bind({});
Dropdown.args = {
  variant: 'dropdown', 
  dropdownLabel: "Age",
  dropdownItems: ['Item 1', 'Item 2', 'Item 3'],
  buttonLabel: "Action",
  backgroundColor: "white"
};