import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Header } from '../components/Header';

export default {
  title: 'Components/Header',
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

export const Toolbar = Template.bind({});
Toolbar.args = {
  primary: false,
  title: 'Toolbar',
  label: 'toolbar',
  backgroundColor: "white"
};