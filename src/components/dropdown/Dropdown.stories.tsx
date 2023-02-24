import { ComponentStory, ComponentMeta } from '@storybook/react';
import Dropdown from './Dropdown';

export default {
  title: 'Inputs/Dropdown',
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const items = [10, 20, 30];
export const Primary = () => <Dropdown label="Age" items={items}/>