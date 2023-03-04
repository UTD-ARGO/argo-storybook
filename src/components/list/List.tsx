import * as React from 'react';
import Box from '@mui/material/Box';
import MUIList from '@mui/material/List';
import ListItem from '@mui/material/ListItem'; 
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import CheckBox from '../checkbox/CheckBox';
import RadioButton from '../radiobutton/RadioButton';
import Toggle from '../toggle/Toggle';
import './list.css';

export interface ListProps {
  variant?: 'default' | 'checklist' | 'radiolist' | 'togglelist';
  listItems: any[];
  color?: string;
  backgroundColor?: string;
}

function variantComponent(variant:string, listItems:any[], color:string, bgcolor: string) {
	const mode = `list--${variant}`;
	const style = {
		'&.MuiFormControlLabel-root': { backgroundColor: bgcolor },
		'&.MuiListItem-root': { backgroundColor: bgcolor }
	};
	if (variant === 'radiolist') {
		return (
		<FormControl>
		  <RadioGroup>
			{listItems.map((item) => (
				<FormControlLabel className={mode} sx={style} value={item} control={<RadioButton value={item} color={color}/>} label={item} />
			))}
		  </RadioGroup>
		</FormControl>
		);}
	else {
		return(
		<MUIList>
			{listItems.map((item) => (
				<ListItem sx={style} value={item} disablePadding className={mode}>
					{(variant === 'default') ? <div>{item}</div> : null}
					{(variant === 'checklist') ? <CheckBox label={item} color={color}/> : null}
					{(variant === 'togglelist') ? <div><Toggle color={color}/>{item}</div> : null} 
				</ListItem>
			))}
		</MUIList>
		);}
};

const List = ({
  variant='default',
  listItems,
  color = '#0000ff',
  backgroundColor = '#ffffff',
  ...props
}: ListProps) => {
	const [selectedValue, setSelectedValue] = React.useState();
	const handleChange = (event:any) => {
		setSelectedValue(event.target.value);
	};
	  return (
		<Box sx={{ width: '100%', maxWidth: 201 }}>
			{variantComponent(variant, listItems, color, backgroundColor)}
		</Box>
	  );
};

export default List;