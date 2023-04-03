import { ComponentStory, ComponentMeta } from '@storybook/react';

import Tooltip, { TooltipProps } from './Tooltip';
import Button from '../button/Button';

export default {
    title: 'Feedback/Tooltip',
    component: Tooltip,
    argTypes: {
        //color: { control: { type: 'color' } }
    }
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) =>
    <div style={{ 'position': 'relative', 'left': '100px', 'top':'100px' }}>
        <Tooltip {...args}>
            <Button label={'Hover over me'} variant={'primary'} />
        </Tooltip>
    </div>

export const Default = Template.bind({});
Default.args = {
    title: 'This is a tooltip'
};

export const Left = Template.bind({});
Left.args = {
    title: 'Left',
    placement: 'left'
};

export const Top = Template.bind({});
Top.args = {
    title: 'Top',
    placement: 'top'
};

export const Right = Template.bind({});
Right.args = {
    title: 'Right',
    placement: 'right'
};