import React, { useState } from 'react';
import './LeftNavigation.css';

import { Drawer } from '@mui/material';

export interface LNProps {
	listItems?: LNItem[];
	footerItem?: React.ReactNode;
}

export interface LNItem {
	label?: string;
	icon?: React.ReactNode;
	onClick: () => void;
}

interface LNItemProps extends LNItem {
	selected: boolean;
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

	const handleSelect = (index: number, callback: () => void) => {
		setSelected(index);
		callback();
	};

	return (
		<Drawer variant="permanent">
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
				{props.footerItem && (
					<a className="leftNavFooter">{props.footerItem}</a>
				)}
			</div>
		</Drawer>
	);
};

export default LeftNavigation;
