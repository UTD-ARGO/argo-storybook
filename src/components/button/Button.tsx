import { SxProps } from '@mui/material/styles';
import MUIButton from '@mui/material/Button';
import './button.css';

export interface ButtonProps {
    variant?: 'primary' | 'secondary' | 'quiet' | 'primary-danger' | 'secondary-danger';
    color?: string;
    hoverColor?: string;
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
    label: string;
    onClick?: () => void;
}

const brandColors = {
    main: '#3050f8',
    primaryHover: '#4477ff',
    hover: '#ecf1ff',
    danger: '#c62828',
    primaryDangerHover: '#e85c5c',
    dangerHover: '#ffe1e1',
    disabled: '#909090'
};

export const Button = ({
    variant = 'secondary',
    color,
    hoverColor,
    size = 'medium',
    disabled = false,
    label,
    ...props
}: ButtonProps) => {
    const variant2 = variant.includes('primary') ? 'contained' :
        variant.includes('secondary') ? 'outlined' : 'text';

    let backgroundColor: string, textColor: string, border: string | undefined;

    if (variant2 === 'contained') {
        variant = variant as 'primary' | 'primary-danger';
        textColor = '#fff';

        if (disabled) {
            backgroundColor = brandColors.disabled;
        // If an error occurred
        } else if (variant === 'primary-danger') {
            backgroundColor = brandColors.danger;
            hoverColor = brandColors.primaryDangerHover;
        // If color isn't specified, use default
        } else if (!color) {
            backgroundColor = brandColors.main;
            hoverColor = brandColors.primaryHover;
        } else {
            backgroundColor = color;
        }

    } else {
        variant = variant as 'secondary' | 'secondary-danger' | 'quiet';
        backgroundColor = 'transparent';

        if (disabled) {
            textColor = brandColors.disabled;
        } else if (variant === 'secondary-danger') {
            textColor = brandColors.danger;
            hoverColor = brandColors.dangerHover;
        } else if (!color) {
            textColor = brandColors.main;
            hoverColor = brandColors.hover;
        } else {
            textColor = color;
        }
    }
    if (variant2 === 'outlined') {
        variant = variant as 'secondary' | 'secondary-danger';

        border = '1px solid '
        if (variant === 'secondary-danger') {
            border += brandColors.danger;
        } else if (!color) {
            border += brandColors.main;
        } else {
            border += color;
        }
    }

    const style = {
        backgroundColor: backgroundColor,
        color: textColor,
        border: border,
        '&:hover': {
            backgroundColor: hoverColor
        },
        '&:focus-visible': {
            border: '2px solid #202020'
        }
    } as SxProps;


    return (
        <MUIButton variant={variant2} size={size} disabled={disabled} sx={style} disableRipple={true} {...props}>
          {label}
        </MUIButton>
    );
};

export default Button;
