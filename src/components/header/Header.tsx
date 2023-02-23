import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import AccountCircle from '@mui/icons-material/AccountCircle';
// @ts-ignore
import SearchIcon from '@mui/icons-material/Search';
// @ts-ignore
import NotificationsIcon from '@mui/icons-material/Notifications';
import './header.css'

interface HeaderProps {
  primary?: boolean;
  title: string;
  label: string;
  button: boolean;
  backgroundColor?: string;
}

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: 'white',
  '&:hover': {
    backgroundColor: 'white',
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'grey',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'black',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '18ch',
      '&:focus': {
        width: '18ch',
      },
    },
  },
}));

export const Header = ({
  primary = false,
  title,
  label,
  button,
  backgroundColor,
  ...props
}: HeaderProps) => {
  const mode = primary ? 'header--global' : `header--${label}`;
  return (
    <div className={['header', mode].join(' ')}>
      {primary ? (
          <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" style={{backgroundColor}}>
                  <Toolbar>
                    <Typography
                      variant="h4"
                      noWrap
                      component="div"
                      sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                      {title}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      color="white"  
                      noWrap
                      component="div"
                      sx={{ flexGrow: 0, display: { xs: 'none', sm: 'block' } }}>
                      {new Date().toLocaleDateString()}
                      &nbsp; &nbsp;
                      {new Date().toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'})}
                    </Typography>

                    <Search>
                      <SearchIconWrapper>
                        <SearchIcon/>
                      </SearchIconWrapper>
                      <StyledInputBase
                        placeholder="Search"
                        inputProps={{ 'aria-label': 'search' }}
                      />
                    </Search>
                    <IconButton
                      size="large"
                      aria-label="show 2 new notifications"
                      color="inherit"
                    >
                      <Badge badgeContent={2} color="error">
                        <NotificationsIcon />
                      </Badge>
                    </IconButton>
                  </Toolbar>
                </AppBar>
            </Box>
          </>
        ) : (
          <>
            <Box sx={{ flexGrow: 1 }}>
              <AppBar position="static" style={{backgroundColor}}>
                <Toolbar variant="dense">
                  <Typography variant="h6" color="black" component="div" sx={{ flexGrow: 1 }}>
                    {title}
                  </Typography>
                    {button ? (  
                      <Button variant="contained" sx={{ display: 'flex'}}>Action</Button>
                      ) : (
                    <>
                    </>
                  )}
                </Toolbar>

              </AppBar>
            </Box>
            
          </>
        )}
    </div>
  );
};