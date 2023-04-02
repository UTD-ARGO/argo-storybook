import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Tab from './Tab';
import CustomTab from './CustomTab';


export default {
	title: 'Navigation/Tab',
	component: Tab
} as ComponentMeta<typeof Tab>;

const Template: ComponentStory<typeof Tab> = (args) => <Tab {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	labels: ['Tab1', 'Tab2', 'Tab3']
};

const TemplateCustom: ComponentStory<typeof CustomTab> = (args) => <CustomTab {...args} />;

export const Custom = TemplateCustom.bind({});
Custom.args = {
	labels: ['Tab1', 'Tab2', 'Tab3', 'Tab4'],
	fontSize: '16px', 
	hoverColor: '#ccc', 
	borderRadius: '5px', 
	fontColor: '#000', 
};