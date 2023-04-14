import React, { useState } from 'react';
import {
	AppBar,
	Badge,
	Box,
	Toolbar,
	Button,
	IconButton,
	Typography
} from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchBar from '../searchbar/SearchBar';
import Tab from '../tab/Tab';
import CustomTab from '../tab/CustomTab';
import Menu from '../menu/Menu'
import './header.css';

export interface HeaderProps {
	variant: 'global' | 'global-tabs' | 'basic' | 'button' | 'tab';
	title?: string;
	buttonLabel?: string;
	tabs?: string[];
	backgroundColor?: string;
	titleColor?: string;
	titleFontWeight?: string;
	customTab?: React.ReactElement;
	menuOptions?: any[];
}

const Header = ({
	title,
	titleColor='#ffff',
	variant,
	buttonLabel,
	tabs = [],
	backgroundColor,
	titleFontWeight='400',
	customTab = <CustomTab labels={[]} />,
	menuOptions = [],
	...props
}: HeaderProps) => {
	const [time, setTime] = React.useState(Date.now());
	const [isMenuOpen, setIsMenuOpen] = React.useState<{ [key: number]: boolean }>({});
	const [selectedTab, setSelectedTab] = React.useState(-1);
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	React.useEffect(() => {
	  const timer = setInterval(() => {
		setTime(Date.now());
	  }, 1000);
	  return () => {
		clearInterval(timer);
	  };
	}, []);
  
	const handleMenuClick = (event: React.MouseEvent<HTMLDivElement>, index: number) => {
	  setSelectedTab(index === selectedTab ? -1 : index);
	  setIsMenuOpen((prevState: { [key: number]: boolean }) => ({ ...prevState, [index]: !prevState[index] }));
	  setAnchorEl(event.currentTarget);
	};
  
	const handleMenuClose = (index: number) => {
	  setIsMenuOpen((prevState: { [key: number]: boolean }) => ({ ...prevState, [index]: false }));
	  setAnchorEl(null);
	};
	  
	return (
		<div style={{ textAlign: 'left' }}>
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
							<Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
									<Typography 
											variant="h4" 
											noWrap 
											component="div" 
											color={titleColor} 
											sx={{ flexGrow: 1, fontWeight: titleFontWeight }}
										>
											{title}
									</Typography>
									<Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 3 }}>
											<SearchBar
											variant="contained"
											label="Search"
											disabled={false}
											error={false}
											/>
									</Box>
									<div style={{ position: "relative", display: "flex", justifyContent: "flex-end", alignItems: "center", height: "100%" }}>
											{menuOptions.map((options, index) => (
												<div key={index}>
														{React.cloneElement(customTab, {
																labels: [customTab.props.labels[index]],
																value: selectedTab === index ? 0 : -1,
																onClick: (e: React.MouseEvent<HTMLDivElement>) => handleMenuClick(e, index),
														})}

														{isMenuOpen[index] && (
																<div style={{ position: "absolute", top: "calc(100% + 4px)", left: 0 }}>
																	<Menu variant="default" options={options} open={isMenuOpen[index]} close={() => handleMenuClose(index)} anchorEl={anchorEl} />
																</div>
														)}
												</div>
											))}
									</div>
							</Toolbar>
					</AppBar>
			</Box>
		  </>
		  ) : (
			<>
			  <Box sx={{ flexGrow: 1 }}>
						<AppBar position="static" style={{ backgroundColor }} sx={{ paddingTop: 0.5, paddingBottom: 0.5 }}>
								<Toolbar variant="dense">
										{variant === 'tab' && (
												<Box sx={{ marginLeft: -3, height: 40, flexGrow: 1 }}>
													<Tab labels={tabs} />
												</Box>
										)}

										{title && (
												<Typography variant="h5" color="black" component="div" sx={{ flexGrow: 1 }}>
													{title}
												</Typography>
										)}

										{['button', 'tab'].includes(variant) && (
												<Button variant="contained" sx={{ flexGrow: 0, position: 'relative' }}>
													{buttonLabel}
												</Button>
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