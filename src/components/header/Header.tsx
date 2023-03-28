import React, { useState } from 'react';
import {
	AppBar,
	Badge,
	Box,
	Toolbar,
	Button,
	IconButton,
	Typography,
	InputBase,
	TextField
} from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchBar from '../searchbar/SearchBar';
import Tab from '../tab/Tab';
import Menu from '../menu/Menu'
import './header.css';

export interface HeaderProps {
	variant: string;
	title?: string;
	buttonLabel?: string;
	tabs?: string[];
	backgroundColor?: string;
}

const Header = ({
	title,
	variant,
	buttonLabel,
	tabs,
	backgroundColor,
	...props
}: HeaderProps) => {
	const [time, setTime] = React.useState(Date.now());
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const [menuOpen, setMenuOpen] = React.useState(false);
	const options = ['Profile', 'My List', 'Settings & Privacy', 'Logout']
	const handleTabClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		setMenuOpen(true);
	};

	React.useEffect(() => {
		const timer = setInterval(() => {
			setTime(Date.now());
		}, 1000);
		return () => {
			clearInterval(timer);
		};
	}, []);

	return (
		<div>
		  {variant === 'global' ? (
			<>
			  <Box sx={{ flexGrow: 1 }}>
				<AppBar position="static" style={{ backgroundColor }}>
				  <Toolbar>
					<Typography
					  variant="h4"
					  noWrap
					  component="div"
					  sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
					>
					  {title}
					</Typography>
					<div
					  style={{
						marginRight: '16px',
						gap: '10px',
						display: 'flex',
						flexDirection: 'row',
						fontSize: '16px',
						lineHeight: '24px',
						letterSpacing: '.5px'
					  }}
					>
					  <p>{new Date(time).toLocaleDateString()}</p>
					  <p>
						{new Date(time).toLocaleTimeString(navigator.language, {
						  hour: '2-digit',
						  minute: '2-digit'
						})}
					  </p>
					</div>
					<Box>
					  <SearchBar
						variant="contained"
						label="Search"
						disabled={false}
						error={false}
					  ></SearchBar>
					</Box>
					<IconButton
					  size="large"
					  aria-label="show new notifications icon"
					  color="inherit"
					  sx={{ marginLeft: 3, marginRight: -1 }}
					>
					  <Badge>
						<NotificationsIcon />
					  </Badge>
					</IconButton>
				  </Toolbar>
				</AppBar>
			  </Box>
			</>
		  ) : variant === 'global-tabs' ? (
			<>
				<Box sx={{ flexGrow: 1 }}>
						<AppBar position="static" style={{ backgroundColor }}>
								<Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
											<Typography
											variant="h4"
											noWrap
											component="div"
											sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
											>
											{title}
											</Typography>
											<Box sx={{ display: 'flex', alignItems: 'center' }}>
												<SearchBar
													variant="contained"
													label="Search"
													disabled={false}
													error={false}
												/>
												<Box sx={{ height: 40, flexGrow: 1, marginLeft: 2 }}>
													<Tab labels={tabs} onClick={handleTabClick} />
												</Box>
												<Box sx={{ height: 40, flexGrow: 1, ml: 'auto' }}>
													<Menu
													variant={'default'}
													options={options}
													open={menuOpen}
													close={() => setMenuOpen(false)}
													/>
												</Box>			
											</Box>
								</Toolbar>
						</AppBar>
				</Box>
			</>
		  ) : (
			<>
			  <Box sx={{ flexGrow: 1 }}>
				<AppBar
				  position="static"
				  style={{ backgroundColor }}
				  sx={{ paddingTop: 0.5, paddingBottom: 0.5 }}
				>
				  <Toolbar variant="dense">
					{variant === 'tab' ? (
					  <Box sx={{ marginLeft: -3, height: 40, flexGrow: 1 }}>
						<Tab labels={tabs}></Tab>
					  </Box>
					) : (
					  <></>
					)}
	  
					{title ? (
					  <Typography
						variant="h5"
						color="black"
						component="div"
						sx={{ flexGrow: 1 }}
					  >
						{title}
					  </Typography>
					) : (
					  <></>
					)}
	  
					{variant === 'button' || variant === 'tab' ? (
					  <Button
						variant="contained"
						sx={{ flexGrow: 0, position: 'relative' }}
					  >
						{' '}
						{buttonLabel}{' '}
					  </Button>
					) : (
					  <></>
					)}
				  </Toolbar>
				</AppBar>
			  </Box>
			</>
		  )}
		</div>
	  );
	  
};

export default Header;
