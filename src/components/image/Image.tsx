import React from 'react';
import Box from '@mui/material/Box';
import Badge from '../badge/Badge';
import './image.css';

export interface ImageProps {
	variant?: 'default' | 'left' | 'center';
	align?: 'center' | 'left' | 'right';
	img: string;
	imgWidth: string;
	imgHeight: string;
	header?: string;
	subheader?: string;
	body?: string;
	padding?: string;
	badge?: string;
}

function badgeComponent(badge: string) {
	if (badge) {
		return (<div> <Badge label={badge} size="small" variant="primary" /></div>);
	}
}

function headerComponent(header: string) {
	if (header) {
		return (<div className='headerDiv'> <h3 className='header'> {header} </h3> </div>);
	}
}

function subheaderComponent(subheader: string) {
	if (subheader) {
		return (<div> <p className='subheader'> {subheader} </p> </div>);
	}
}

function bodyComponent(body: string) {
	if (body) {
		return (<div> <p> {body} </p> </div>);
	}
}

function imageOrientation(
			variant: string, 
			img: string, 
			align: string,
			imgWidth: string, 
			imgHeight: string, 
			header: any,
			subheader: any,
			body: any,
			padding: string,
			badge: any,
			) {
	if (variant == 'default') {
		return (
			<Box>
				<img src={img} width={imgWidth} height={imgHeight} />
			</Box>
		);
	} else if (variant == 'left') {
		return (
			<Box sx={{ display: 'flex', padding: {padding}}}>
				<Box sx={{ justifyContent: 'center' }}>
					<img src={img} width={imgWidth} height={imgHeight} />
				</Box>
				<Box sx={{ paddingLeft: '20px', textAlign: align}}>
					{headerComponent(header)}	
					{badgeComponent(badge)}
					{subheaderComponent(subheader)}
					{bodyComponent(body)}
				</Box>
			</Box>
		);
	} else if (variant == 'center') {
		return (
			<Box sx={{ padding: {padding} }}>
				<Box sx={{textAlign: align }}>
					<img src={img} width={imgWidth} height={imgHeight} />
				</Box>
				<Box sx={{textAlign: align }}>
					{headerComponent(header)}	
					{badgeComponent(badge)}
					{subheaderComponent(subheader)}
					{bodyComponent(body)}
				</Box>
			</Box>
		);
	}
}


const Image = ({
	variant='default',
	align='left',
	img, 
	imgWidth,
	imgHeight,
	header,
	subheader,
	body,
	padding='20px',
	badge,
	...props
}: ImageProps) => {
	return (
		<Box>
			{imageOrientation(variant, img, align, imgWidth, imgHeight, header, subheader, body, padding, badge)}
		</Box>
	);
};

export default Image;