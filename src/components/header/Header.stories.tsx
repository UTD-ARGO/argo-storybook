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
  primary: true,
  title: 'Global Header',
  label: 'global',
  backgroundColor: "steelblue"
};

export const Basic = Template.bind({});
Basic.args = {
  primary: false,
  title: 'Basic',
  label: 'toolbar',
  button: false,
  backgroundColor: "white"
};

export const SingleButton = Template.bind({});
SingleButton.args = {
  primary: false,
  title: 'Single Button',
  label: 'toolbar',
  button: true,
  backgroundColor: "white"
};