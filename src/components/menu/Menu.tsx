import * as React from 'react';
import {Box, MenuItem, FormControl, RadioGroup, FormControlLabel} from '@mui/material';
import MUIMenu from '@mui/material/Menu';
import RadioButton from '../radiobutton/RadioButton';
import CheckBox from '../checkbox/CheckBox';
import Toggle from '../toggle/Toggle';

export interface MenuProps {
    variant?: 'default' | 'checkmenu' | 'radiomenu' | 'togglemenu';
    options: any[];
    open?: boolean;
    close?: (event:{}, reason: "backdropClick" | "escapeKeyDown") => any;
    componentColor?: string;
}

function MenuHandler(variant:string,  options:any[], open:boolean, close: (event: {}, reason: "backdropClick" | "escapeKeyDown") => {}, componentColor:string) {
  if (variant === 'radiomenu') {
		return (
        <div>
          <MUIMenu
            open={open}
            onClose={close}>
            <FormControl>
                <RadioGroup>
                    {options.map((option) => (
                        <MenuItem
                          key={option}>
                              <FormControlLabel 
                              value={option} 
                              control={<RadioButton value={option} color={componentColor}/>}
                              label={option}/>
                        </MenuItem>
                    ))}
              </RadioGroup>
          </FormControl>
        </MUIMenu>
      </div>
		);}

  else {
    return (
      <div>
        <MUIMenu
            open={open}
            onClose={close}>
                {options.map((option) => (
                    <MenuItem
                        key={option}>
                        {(variant === 'default') ? <div>{option}</div> : null}
                        {(variant === 'checkmenu') ? <CheckBox label={option} color={componentColor}/> : null}
                        {(variant === 'togglemenu') ? <div><Toggle color={componentColor}/>{option}</div> : null} 
                  </MenuItem>
              ))}
        </MUIMenu>
      </div>
    );
}}

const Menu = ({
    variant='default',
    options=[],
    open=true,
    close=(event: {}, reason: "backdropClick" | "escapeKeyDown") => {},
    componentColor='blue',
    ...props
  }: MenuProps) => {
        return (
          <Box sx={{ width: '100%', maxWidth: 300}}>
              {MenuHandler(variant, options, open, close, componentColor)}
          </Box>
        );
  };
  
export default Menu;