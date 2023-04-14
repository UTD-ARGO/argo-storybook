import { PropsWithChildren, useState, useEffect } from 'react';
import Login from './Login';

export type LoginPageProps = {
	logo?: string | React.ReactNode;
	bgColor1?: string;
	bgColor2?: string;
	accentColor?: string;
	alwaysShowLogin?: boolean;
	onLogin?: (data: any) => void;
};

const LoginPage = (props: PropsWithChildren<LoginPageProps>) => {
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
		alignItems: 'center'
	} as React.CSSProperties;

	const [isLoggedIn, setIsLoggedIn] = useState(false);

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
				<Login
					logo={props.logo}
					accentColor={props.accentColor}
					onLogin={onLogin}
				/>
			)}
		</div>
	);
};

export default LoginPage;
