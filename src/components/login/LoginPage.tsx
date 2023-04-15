import { PropsWithChildren, useState, useEffect } from 'react';
import Login from './Login';
import Signup from './Signup';
import Button from '../button/Button';

export type LoginPageProps = {
	logo?: string | React.ReactNode;
	bgColor1?: string;
	bgColor2?: string;
	accentColor?: string;
	alwaysShowLogin?: boolean;
	onLogin?: (data: any) => void;
};

const LoginPage = (props: PropsWithChildren<LoginPageProps>) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [onSignupTab, setOnSignupTab] = useState(false);

	const {
		bgColor1 = 'transparent',
		bgColor2 = 'transparent',
		alwaysShowLogin = false
	} = props;

	const style = {
		position: 'absolute',
		width: '100vw',
		height: '100vh',
		background: `linear-gradient(${bgColor1}, ${bgColor2})`,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
		gap: '20px'
	} as React.CSSProperties;

	const onLogin = () => {
		setIsLoggedIn(true);
		window.location.href.replace('#login', '#');
	};

	useEffect(() => {
		if (window.location.href.includes('#login') || alwaysShowLogin) {
			setIsLoggedIn(false);
		} else {
			onLogin();
		}
	}, []);

	// Render children if logged in, otherwise render login page
	// Realistically this isn't a good way to do this but it's just a demo
	return (
		<div style={style}>
			{isLoggedIn ? (
				props.children
			) : (
				<>
					{!onSignupTab ? (
						<>
							<Login
								logo={props.logo}
								accentColor={props.accentColor}
								onLogin={onLogin}
							/>
							<Button
								label="Need an Account?"
								onClick={(e) => {
									e.preventDefault();
									setOnSignupTab(true);
								}}
								variant="primary"
								color={props.accentColor}
							/>
						</>
					) : (
						<>
							<Signup
								logo={props.logo}
								accentColor={props.accentColor}
								onSignup={onLogin}
							/>
							<Button
								label="Already have an account?"
								onClick={(e) => {
									e.preventDefault();
									setOnSignupTab(false);
								}}
								variant="primary"
								color={props.accentColor}
							/>
						</>
					)}
				</>
			)}
		</div>
	);
};

export default LoginPage;
