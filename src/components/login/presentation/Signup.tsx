// import { useReducer } from 'react';
// import Button from '../button/Button';
// import Card from '../card/Card';
// import TextField, { TextFieldProps } from '../textfield/TextField';

// export type SignupProps = {
// 	logo: string | React.ReactNode;
// 	accentColor?: string;
// 	onSignup?: (data: AccountInfo) => void;
// };

// export type AccountInfo = {
// 	username: string;
// 	password: string;
// 	confirmPassword: string;
// 	email: string;
// 	firstName: string;
// 	lastName: string;
// 	phone: string;
// };

// const initialState: AccountInfo = {
// 	username: '',
// 	password: '',
// 	confirmPassword: '',
// 	email: '',
// 	firstName: '',
// 	lastName: '',
// 	phone: ''
// };

// const reducer = (
// 	state: AccountInfo,
// 	action: { type: string; payload: string }
// ) => {
// 	switch (action.type) {
// 		case 'username':
// 			return { ...state, username: action.payload };
// 		case 'password':
// 			return { ...state, password: action.payload };
// 		case 'confirmPassword':
// 			return { ...state, confirmPassword: action.payload };
// 		case 'email':
// 			return { ...state, email: action.payload };
// 		case 'firstName':
// 			return { ...state, firstName: action.payload };
// 		case 'lastName':
// 			return { ...state, lastName: action.payload };
// 		case 'phone':
// 			return { ...state, phone: action.payload };
// 		default:
// 			return state;
// 	}
// };

// const fieldArgs = {
// 	size: 'small',
// 	margin: 'normal',
// 	width: 340,
// 	required: true
// } as TextFieldProps;

// const Signup = (props: SignupProps) => {
// 	const [accInfo, setAccInfo] = useReducer(reducer, initialState);

// 	const handleSignup = () => {
// 		if (props.onSignup) {
// 			props.onSignup(accInfo);
// 		}
// 	};

// 	return (
// 		<Card
// 			style={{
// 				width: 'fit-content',
// 				display: 'flex',
// 				flexDirection: 'row',
// 				justifyContent: 'center',
// 				alignItems: 'center',
// 				textAlign: 'center'
// 			}}
// 		>
// 			<>{props.logo}</>
// 			<div>
// 				<div
// 					style={{
// 						display: 'inline-flex',
// 						justifyContent: 'space-between',
// 						width: '100%'
// 					}}
// 				>
// 					<TextField
// 						{...fieldArgs}
// 						label="First Name"
// 						width={160}
// 						onChange={(e) => {
// 							setAccInfo({ type: 'firstName', payload: e.target.value });
// 						}}
// 					/>
// 					<TextField
// 						{...fieldArgs}
// 						label="Last Name"
// 						width={160}
// 						onChange={(e) => {
// 							setAccInfo({ type: 'lastName', payload: e.target.value });
// 						}}
// 					/>
// 				</div>
// 				<TextField
// 					{...fieldArgs}
// 					label="Email Address"
// 					onChange={(e) => {
// 						setAccInfo({ type: 'email', payload: e.target.value });
// 					}}
// 				/>
// 				<TextField
// 					{...fieldArgs}
// 					label="Username"
// 					onChange={(e) => {
// 						setAccInfo({ type: 'username', payload: e.target.value });
// 					}}
// 				/>
// 				<TextField
// 					{...fieldArgs}
// 					label="Password"
// 					onChange={(e) => {
// 						setAccInfo({ type: 'password', payload: e.target.value });
// 					}}
// 				/>
// 				<TextField
// 					{...fieldArgs}
// 					label="Confirm Password"
// 					onChange={(e) => {
// 						setAccInfo({ type: 'confirmPassword', payload: e.target.value });
// 					}}
// 				/>

// 				<TextField
// 					{...fieldArgs}
// 					label="Phone Number"
// 					required={false}
// 					onChange={(e) => {
// 						setAccInfo({ type: 'phone', payload: e.target.value });
// 					}}
// 				/>
// 			</div>
// 			<div
// 				style={{
// 					marginTop: '30px',
// 					display: 'flex',
// 					justifyContent: 'flex-end'
// 				}}
// 			>
// 				<Button
// 					label="Sign Up"
// 					variant="primary"
// 					onClick={handleSignup}
// 					color={props.accentColor}
// 				/>
// 			</div>
// 		</Card>
// 	);
// };

// export default Signup;
