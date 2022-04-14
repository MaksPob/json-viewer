import { SortOrder } from '../../../shared/types';

export interface SelectedSortOrder {
	[key: string]: SortOrder;
}

export interface SortProps {
    column: string;
}
