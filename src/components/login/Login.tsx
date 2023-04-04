import { useState } from 'react';
import Button from '../button/Button';
import Card from '../card/Card';
import Form from '../form/Form';
import TextField from '../textfield/TextField';

export type LoginProps = {
	logo: string | React.ReactNode;
	onLogin?: (data: any) => void;
	accentColor?: string;
};

const Login = (props: LoginProps) => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const handleLogin = () => {
		if (props.onLogin) {
			props.onLogin({ username, password });
		}
	};

	return (
		<Card
			style={{
				width: 350,
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'center',
				alignItems: 'center',
				textAlign: 'center'
			}}
		>
			<>{props.logo}</>
			<TextField
				label="Username"
				size="small"
				margin="normal"
				width={300}
				required
				onChange={(e) => {
					setUsername(e.target.value);
				}}
			/>
			<TextField
				label="Password"
				size="small"
				margin="normal"
				width={300}
				required
				onChange={(e) => {
					setPassword(e.target.value);
				}}
			/>
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
					<a href="#">Create Account</a>
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
