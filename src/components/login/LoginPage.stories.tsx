import { ComponentStory, ComponentMeta } from '@storybook/react';
import LoginPage from './LoginPage';
import { ReactNode } from 'react';

export default {
	title: 'Surfaces/Login/LoginPage',
	component: LoginPage,
	argTypes: {
		bgColor1: { control: { type: 'color' } },
		bgColor2: { control: { type: 'color' } }
	}
} as ComponentMeta<typeof LoginPage>;

const TemplatePage: ComponentStory<typeof LoginPage> = (args) => (
	<LoginPage {...args} />
);
const loggedIn: ReactNode = <div>Logged In!</div>;

export const Default = TemplatePage.bind({});
Default.args = {
	logo: 'Logo',
	children: loggedIn,
	alwaysShowLogin: true
};

const logoStyle = {
	fontSize: '4rem',
	fontWeight: 'bold'
} as React.CSSProperties;

export const FreshOrangesLogin = TemplatePage.bind({});
FreshOrangesLogin.args = {
	...Default.args,
	logo: (
		<h1 style={{ color: 'orange', ...logoStyle, fontSize: '2.5rem' }}>
			Fresh Oranges
		</h1>
	),
	bgColor1: '#ff9500',
	bgColor2: '#ff4d00',
	accentColor: 'orange'
};

export const StocksLogin = TemplatePage.bind({});
StocksLogin.args = {
	...Default.args,
	logo: <h1 style={{ ...logoStyle, fontFamily: 'Gemunu Libre' }}>Stocks</h1>,
	bgColor1: '#ebffd0',
	bgColor2: '#9ad08f',
	accentColor: '#09ad01',
	children: loggedIn
};

export const AnalyticsLogin = TemplatePage.bind({});
AnalyticsLogin.args = {
	...Default.args,
	logo: (
		<h1
			style={{
				color: '#0048fd',
				...logoStyle,
				fontSize: '3.5rem',
				fontFamily: 'Poppins'
			}}
		>
			Analytics!
		</h1>
	),
	bgColor1: '#e6f7ff',
	bgColor2: '#91d5ff',
	children: loggedIn
};
