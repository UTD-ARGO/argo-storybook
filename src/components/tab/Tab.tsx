import * as React from 'react';
import { Tab as MUITab, Tabs as MUITabs, Box } from '@mui/material';
import './tab.css';

export interface TabProps {
	labels?: string[];
}

export default function Tab({ labels, ...props }: TabProps) {
	const [value, setValue] = React.useState(0);
	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	return (
		<MUITabs
			value={value}
			onChange={handleChange}
			textColor="primary"
			indicatorColor="primary"
			aria-label="primary tabs"
			sx={{ borderBottom: 1, borderColor: 'divider' }}
		>
			{labels &&
				labels.length > 0 &&
				labels.map((label, index) => (
					<MUITab value={index} label={label} sx={{ textTransform: 'none' }} />
				))}
		</MUITabs>
	);
}
