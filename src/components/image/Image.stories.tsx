import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Image from './Image';

export default {
	title: 'Surfaces/Image',
	component: Image
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => (
	<Image {...args} />
);

const poster = require('./poster.jpg');

export const Default = Template.bind({});
Default.args = {
	variant: 'default',
	img: poster,
	imgWidth: '160',
	imgHeight: '230',
};

export const Left = Template.bind({});
Left.args = {
	variant: 'left',
	img: poster,
	imgWidth: '160',
	imgHeight: '230',
	badge: 'Score: 94%',
	header: 'Everything Everywhere All at Once',
	subheader: 'Directors: Daniel Kwan',
	body: 'Featuring Michelle Yeoh and Ke Huy Quan'
};

export const Center = Template.bind({});
Center.args = {
	variant: 'center',
	img: poster,
	imgWidth: '160',
	imgHeight: '230',
	badge: 'Score: 94%',
	header: 'Everything Everywhere All at Once',
	subheader: 'Directors: Daniel Kwan',
	body: 'Featuring Michelle Yeoh and Ke Huy Quan'
};