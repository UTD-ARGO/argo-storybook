import type { ComponentMeta, ComponentStory } from "@storybook/react";
import Paper from "./Paper";


export default {
  title: "Surfaces/Paper",
  component: Paper,
} as ComponentMeta<typeof Paper>;

const Template: ComponentStory<typeof Paper> = (args) => <Paper {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const samplePaper = Template.bind({});
samplePaper.args = {
  children: 'I am elevated',
  elevation: 8,
  variant: 'elevation'
};

