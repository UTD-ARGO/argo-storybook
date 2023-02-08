import React from 'react';

import SearchField from '../components/SearchField';

export default {
  component: SearchField,
  title: 'Components/SearchField',
};

const Template = args => <SearchField {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: "Search",
  fieldType: "default",
};

export const Hover = Template.bind({});
Hover.args = {
  placeholder: "Search",
  fieldType: "hover",
};

export const Focus = Template.bind({});
Focus.args = {
  placeholder: "Search",
  fieldType: "focus",
};

