import { Close } from '@mui/icons-material';
import './FilterChip.css';

export interface FilterChipProps {
	value?: string;
	onClose?: () => void;
}

const FilterChip = (props: FilterChipProps) => {
	return (
		<div className="filterChip">
			<p>{props.value}</p>
			<a onClick={props.onClose}>
				<Close />
			</a>
		</div>
	);
};

export default FilterChip;
