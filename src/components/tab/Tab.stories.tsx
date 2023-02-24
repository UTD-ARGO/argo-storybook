import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Tab  from './Tab';

export default {
	title: 'Inputs/Tab',
	component: Tab
} as ComponentMeta<typeof Tab>;

export const Primary = {
	args: {
	  label1: 'Tab',
	  label2: 'Tab',
	  label3: 'Tab',
	},
  };