import { Close } from '@mui/icons-material';
import './FilterChip.css';

export interface FilterChipProps {
	value?: string;
	onClick?: () => void;
	onClose?: () => void;
}

const FilterChip = (props: FilterChipProps) => {
	const handleClose = (e: React.MouseEvent) => {
		e.stopPropagation();
		props.onClose && props.onClose();
	};

	return (
		<a className="filterChip" onClick={props.onClick}>
			<p>{props.value}</p>
			<a onClick={handleClose}>
				<Close />
			</a>
		</a>
	);
};

export default FilterChip;
