import { ComponentStory, ComponentMeta } from '@storybook/react';
import Dropdown from './Dropdown';

export default {
  title: 'Inputs/Dropdown',
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

//👇 We create a “template” of how args map to rendering
// const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

//👇 Each story then reuses that template
// export const Primary = Template.bind({});
// Primary.args = { backgroundColor: '#ff0', label: 'Button' };

const items = [10, 20, 30];
export const Primary = () => <Dropdown label="Age" items={items}/>