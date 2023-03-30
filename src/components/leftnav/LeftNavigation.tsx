import React, { useState } from 'react';
import './LeftNavigation.css';

import { IconButton } from '@mui/material';
import { AccountCircleOutlined } from '@mui/icons-material';

export interface LNProps {
	listItems?: LNItem[];
	onFooterClick?: () => void;
}

export interface LNItem {
	label?: string;
	icon?: React.ReactNode;
	onClick?: () => void;
}

interface LNItemProps extends LNItem {
	selected?: boolean;
}

const ListItem = (props: LNItemProps) => {
	return (
		<a
			className={`leftNavItem ${props.selected ? 'leftNavItem--selected' : ''}`}
			onClick={props.onClick}
		>
			{props.icon}
			<span>{props.label}</span>
		</a>
	);
};

const LeftNavigation = (props: LNProps) => {
	const [selected, setSelected] = useState(0);

	const handleSelect = (index: number, callback?: () => void) => {
		setSelected(index);
		if (callback) callback();
	};

	return (
		<div className="leftNav">
			<div>
				{props.listItems?.map((item: LNItem, index: number) => {
					return (
						<ListItem
							key={index}
							{...item}
							selected={selected === index}
							onClick={() => handleSelect(index, item.onClick)}
						/>
					);
				})}
			</div>
			<a className="leftNavFooter">
				<IconButton onClick={props.onFooterClick}>
					<AccountCircleOutlined fontSize="large" />
				</IconButton>
			</a>
		</div>
	);
};

export default LeftNavigation;
