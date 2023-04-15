import { useReducer } from 'react';
import Button from '../button/Button';
import Card from '../card/Card';
import TextField from '../textfield/TextField';

export type SignupProps = {
	logo: string | React.ReactNode;
	accentColor?: string;
	onSignup?: (data: any) => void;
};

export type AccountInfo = {
	username: string;
	password: string;
	confirmPassword: string;
	email: string;
	firstName: string;
	lastName: string;
	phone: string;
};

const initialState: AccountInfo = {
	username: '',
	password: '',
	confirmPassword: '',
	email: '',
	firstName: '',
	lastName: '',
	phone: ''
};

const reducer = (
	state: AccountInfo,
	action: { type: string; payload: string }
) => {
	switch (action.type) {
		case 'username':
			return { ...state, username: action.payload };
		case 'password':
			return { ...state, password: action.payload };
		case 'confirmPassword':
			return { ...state, confirmPassword: action.payload };
		case 'email':
			return { ...state, email: action.payload };
		case 'firstName':
			return { ...state, firstName: action.payload };
		case 'lastName':
			return { ...state, lastName: action.payload };
		case 'phone':
			return { ...state, phone: action.payload };
		default:
			return state;
	}
};

const Signup = (props: SignupProps) => {
	const [accInfo, setAccInfo] = useReducer(reducer, initialState);

	const handleSignup = () => {
		if (props.onSignup) {
			props.onSignup(accInfo);
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
			<div>
				<div
					style={{
						display: 'inline-flex',
						justifyContent: 'space-between',
						width: '100%'
					}}
				>
					<TextField
						label="First Name"
						size="small"
						margin="normal"
						width={160}
						required
						onChange={(e) => {
							setAccInfo({ type: 'firstName', payload: e.target.value });
						}}
					/>
					<TextField
						label="Last Name"
						size="small"
						margin="normal"
						width={160}
						required
						onChange={(e) => {
							setAccInfo({ type: 'lastName', payload: e.target.value });
						}}
					/>
				</div>
				<TextField
					label="Email Address"
					size="small"
					margin="normal"
					width={340}
					required
					onChange={(e) => {
						setAccInfo({ type: 'email', payload: e.target.value });
					}}
				/>
				<TextField
					label="Username"
					size="small"
					margin="normal"
					width={340}
					required
					onChange={(e) => {
						setAccInfo({ type: 'username', payload: e.target.value });
					}}
				/>
				<TextField
					label="Password"
					size="small"
					margin="normal"
					width={340}
					required
					onChange={(e) => {
						setAccInfo({ type: 'password', payload: e.target.value });
					}}
				/>
				<TextField
					label="Confirm Password"
					size="small"
					margin="normal"
					width={340}
					required
					onChange={(e) => {
						setAccInfo({ type: 'confirmPassword', payload: e.target.value });
					}}
				/>

				<TextField
					label="Phone Number"
					size="small"
					margin="normal"
					width={340}
					onChange={(e) => {
						setAccInfo({ type: 'phone', payload: e.target.value });
					}}
				/>
			</div>
			<div
				style={{
					marginTop: '30px',
					display: 'flex',
					justifyContent: 'flex-end'
				}}
			>
				<Button
					label="Sign Up"
					variant="primary"
					onClick={handleSignup}
					color={props.accentColor}
				/>
			</div>
		</Card>
	);
};

export default Signup;
