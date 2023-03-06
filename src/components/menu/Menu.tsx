import * as React from 'react';
import {Box, Button, MenuItem, FormControl, RadioGroup, FormControlLabel} from '@mui/material';
import MUIMenu from '@mui/material/Menu';
import RadioButton from '../radiobutton/RadioButton';
import CheckBox from '../checkbox/CheckBox';
import Toggle from '../toggle/Toggle';

export interface MenuProps {
    variant?: 'default' | 'checkmenu' | 'radiomenu' | 'togglemenu';
    options: any[];
    buttonLabel: string;
    buttonLabelColor?: string
    buttonColor?: string;
    buttonHoverColor?: string;
    componentColor?: string;
}

function MenuHandler(variant:string,  options:any[], buttonLabel:string, buttonLabelColor:string, buttonColor:string, 
  buttonHoverColor:string, componentColor:string) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  if (variant === 'radiomenu') {
		return (
        <div>
          <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            sx={{backgroundColor: buttonColor, color: buttonLabelColor, textTransform: 'none'}}
          >
            {buttonLabel}
          </Button>
          <MUIMenu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <FormControl>
              <RadioGroup>
                {options.map((option) => (
                  <MenuItem
                    key={option}
                    onClick={handleClose}
                  >
                  <FormControlLabel 
                  value={option} 
                  control={<RadioButton value={option} color={componentColor}/>}
                  label={option} 
                  />
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
        <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          sx={{backgroundColor: buttonColor, color: buttonLabelColor, textTransform: 'none'}}
        >
          {buttonLabel}
        </Button>
        <MUIMenu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
         >
            {options.map((option) => (
              <MenuItem
                key={option}
                onClick={handleClose}
              >
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
    options,
    buttonLabel,
    buttonLabelColor='white',
    buttonColor='blue',
    buttonHoverColor="white",
    componentColor='blue',
    ...props
  }: MenuProps) => {
        return (
          <Box sx={{ width: '100%', maxWidth: 300}}>
              {MenuHandler(variant, options, buttonLabel, buttonLabelColor, buttonColor, buttonHoverColor, componentColor)}
          </Box>
        );
  };
  
export default Menu;