import { InputLabelProps } from '@mui/material';
import MUITextField from '@mui/material/TextField';

export interface TextFieldProps {
    autoComplete?: string;
    autoFocus?: boolean;
    disabled?: boolean;
    error?: boolean;
    fullWidth?: boolean;
    id?: string;
    multiline?: boolean;
    minRows?: number | string;
    maxRows?: number | string;
    rows?: number | string;
    required?: boolean;
    size?: 'small' | 'medium';
    label: Node;
    defaultValue?: string;
    helperText?: Node;
    name: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};