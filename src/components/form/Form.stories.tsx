import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TextField from '../textfield/TextField';
import Dropdown from '../dropdown/Dropdown';
import Checkbox from '../checkbox/Checkbox';
import Radio from '../radiobutton/RadioButton';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import './form.css';

import Form from './Form';

export default {
	title: 'Surfaces/Form',
	component: Form
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = (args) => (
	<Form {...args} />
);

const textfield: React.ReactNode = (
	<div>
		<TextField label='Textfield' size='small' width={210}/>
	</div>
);

const items = [1,2,3]
const dropdown: React.ReactNode = (
	<div>
		<Dropdown label='Dropdown' items={items} size='small' />
	</div>
);

const checkboxes: React.ReactNode = (
	<div className="formText">
	Text
		<div className="checkboxDiv">
			<Checkbox label="Label" />
			<Checkbox label="Label" />
		</div>
	</div>
);

const largefield: React.ReactNode = (
	<div className="largeFieldDiv">
		<TextField label='Large Textfield' width={450} multiline rows='5'/>
	</div>
);

const radiogroup: React.ReactNode = (
	<div className="formText">
		Text
		<div className="checkboxDiv">
			<FormControl>
			  <RadioGroup row>
				<FormControlLabel value="label1" control={<Radio />} label="Label" />
				<FormControlLabel value="label2" control={<Radio />} label="Label" />
			  </RadioGroup>
			</FormControl>
		</div>
	</div>
);

const sampleMatrix = [[textfield,textfield],[dropdown, dropdown], [checkboxes], [radiogroup], [largefield]];

export const Default = Template.bind({});
Default.args = {
	formMatrix: sampleMatrix,
	title: 'Sample Form'
};