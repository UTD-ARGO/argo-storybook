import { styled } from '@mui/material/styles';
import MuiTooltip, { TooltipProps as MuiTooltipProps, tooltipClasses } from '@mui/material/Tooltip';

export interface TooltipProps {
    children: React.ReactElement;
    title: React.ReactNode;
    describeChild?: boolean; // set this true if the 'title' property is a description rather than a label
    //color?: string;
    //maxWidth?: number;
    placement?: 'bottom-end' | 'bottom-start' | 'bottom' | 'left-end' | 'left-start' | 'left' | 'right-end' | 'right-start' | 'right' | 'top-end' | 'top-start' | 'top';

    disableHoverListener?: boolean;
    disableFocusListener?: boolean;
    disableInteractive?: boolean;
    disableTouchListener?: boolean;
    enterDelay?: number;
    enterNextDelay?: number;
    enterTouchDelay?: number;
    leaveDelay?: number;
    leaveTouchDelay?: number;
    followCursor?: boolean;
    id?: string;
    onClose?: (event: Event | React.SyntheticEvent) => void;
    onOpen?: (event: React.SyntheticEvent) => void;
    open?: boolean;
    transitionComponent?: MuiTooltipProps["TransitionComponent"];
    transitionProps?: MuiTooltipProps["TransitionProps"];
};


const Tooltip = (props: TooltipProps) => (
    <MuiTooltip arrow {...props} />
);

export default Tooltip;