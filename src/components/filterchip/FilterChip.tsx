import { useState } from 'react';
import { Close } from '@mui/icons-material';
import './FilterChip.css';

export interface FilterChipProps {
	value?: string;
	enabled?: boolean;
	onClick?: () => void;
	onClose?: () => void;
}

const FilterChip = (props: FilterChipProps) => {
	const [enabled, setEnabled] = useState(props.enabled || false);

	const onClick = () => {
		setEnabled(!enabled);
		props.onClick && props.onClick();
	};

	const handleClose = (e: React.MouseEvent) => {
		e.stopPropagation();
		props.onClose && props.onClose();
	};

	return (
		<a className="filterChip" onClick={onClick}>
			<p>{props.value}</p>
			<span onClick={handleClose}>
				<Close />
			</span>
		</a>
	);
};

export default FilterChip;
