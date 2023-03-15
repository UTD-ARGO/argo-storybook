import React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '../button/Button';

export interface FormProps {
	formMatrix: Array<Array<React.ReactNode>>;
    width?: number;
    padding?: string;
    title: string;
    titleVariant?: "button" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "inherit" | "overline" | "subtitle1" | "subtitle2" | "body1" | "body2";
    titleAlignment?: "center" | "justify" | "inherit" | "left" | "right";
    onClick?: () => void;
}

function content(matrix: Array<Array<React.ReactNode>>) {
  return matrix.map((row, rowIndex) => (
    <Grid key={`row-${rowIndex}`} container justifyContent="space-between" paddingBottom="10px">
      {row.map((item, itemIndex) => (
        <Grid key={`item-${rowIndex}-${itemIndex}`} item xs="auto">
          {item}
        </Grid>
      ))}
    </Grid>
  ));
}

const Form = ({
    formMatrix,
    width = 450,
    padding = '15px',
    title,
    titleVariant = 'h6',
    titleAlignment = 'center',
    onClick,
	...props
}: FormProps) => {
	return (
    <div>
    <Box sx={{ width: {width}, flexGrow: 1, padding: {padding} }}>
      <Typography variant={titleVariant} gutterBottom align="center">
        {title}
      </Typography>
        <Grid container>
       {content(formMatrix)}
        </Grid>
        <Grid container justifyContent='flex-end'>
            <Button variant='primary' size='small' label='Submit' onClick={onClick}/>
        </Grid>
    </Box>
    </div>
	);
};

export default Form;