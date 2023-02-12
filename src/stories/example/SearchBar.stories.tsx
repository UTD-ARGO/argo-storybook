import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SearchBar } from './SearchBar';

export default {
  title: 'Example/SearchBar',
  component: SearchBar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof SearchBar>;

const Template: ComponentStory<typeof SearchBar> = (args) => <SearchBar {...args} />;

export const Outlined = Template.bind({});
Outlined.args = {
  primary: true,
  label: 'Outlined Search',
};

export const Contained = Template.bind({});
Contained.args = {
  label: 'Contained Search',
};
