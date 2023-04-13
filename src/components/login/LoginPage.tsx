import Login from './Login';

export type LoginPageProps = {
	logo?: string | React.ReactNode;
	bgColor1?: string;
	bgColor2?: string;
	accentColor?: string;
	onLogin?: (data: any) => void;
};

const LoginPage = (props: LoginPageProps) => {
	const { bgColor1 = 'transparent', bgColor2 = 'transparent' } = props;

	const style = {
		position: 'absolute',
		width: '100vw',
		height: '100vh',
		background: `linear-gradient(${bgColor1}, ${bgColor2})`,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	} as React.CSSProperties;

	return (
		<div style={style}>
			<Login
				logo={props.logo}
				accentColor={props.accentColor}
				onLogin={props.onLogin}
			/>
		</div>
	);
};

export default LoginPage;
