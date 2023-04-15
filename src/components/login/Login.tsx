import { useState } from 'react';
import Button from '../button/Button';
import Card from '../card/Card';
import TextField from '../textfield/TextField';

export type LoginProps = {
	logo: string | React.ReactNode;
	onLogin?: (data: any) => void;
	accentColor?: string;
};

const Login = (props: LoginProps) => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const handleLogin = (e: any) => {
		e.preventDefault();
		if (props.onLogin) {
			props.onLogin({ username, password });
		}
	};

	return (
		<Card
			style={{
				width: 'fit-content',
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'center',
				alignItems: 'center',
				textAlign: 'center'
			}}
		>
			<>{props.logo}</>
			<div style={{ margin: '0 auto' }}>
				<TextField
					label="Username"
					size="small"
					margin="normal"
					width={320}
					required
					onChange={(e) => {
						setUsername(e.target.value);
					}}
				/>
				<TextField
					label="Password"
					size="small"
					margin="normal"
					width={320}
					required
					onChange={(e) => {
						setPassword(e.target.value);
					}}
				/>
			</div>
			<div
				style={{
					width: '100%',
					marginTop: '30px',
					display: 'flex',
					justifyContent: 'space-between ',
					alignItems: 'center'
				}}
			>
				<div>
					<a href="#" style={{ textDecoration: 'none' }}>
						Forgot Password?
					</a>
				</div>
				<Button
					label="Log In"
					variant="primary"
					onClick={handleLogin}
					color={props.accentColor}
				/>
			</div>
		</Card>
	);
};

export default Login;
