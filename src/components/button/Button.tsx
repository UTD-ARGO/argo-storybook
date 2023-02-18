import MUIButton from '@mui/material/Button';
import './button.css';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'quiet' | 'primary-danger' | 'secondary-danger';
  label: string;
  onClick?: () => void;
}

export const Button = ({
  variant = 'secondary',
  label,
  ...props
}: ButtonProps) => {
    const mode = variant.includes('primary') ? 'contained' :
        variant.includes('secondary') ? 'outlined' : 'text';
  return (
    <MUIButton
      variant={mode}
      className={['button', `button--${variant}`].join(' ')}
      {...props}
    >
      {label}
    </MUIButton>
  );
};
