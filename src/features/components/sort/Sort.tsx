import React, { useState } from 'react';
import { SelectedEntityColor } from '../virtual-scroll-table/types';
import { SelectedSortOrder, SortProps } from './types';
import styles from './Sort.module.css';
import { useAppDispatch } from '../../../app/hooks';
import { setSortOrderAction } from '../../../store/users/actions';
import { SortOrder } from '../../../shared/types';

export const Sort = (props: SortProps) => {
	const { column } = props;
	const dispatch = useAppDispatch();
	const [selectedSortOrder, setSortOrder] = useState<SelectedSortOrder>();
	const selectedOrderColor = (column: string, sortOrder: SortOrder) =>
		(selectedSortOrder?.[column] === sortOrder ? SelectedEntityColor.LightBlue : SelectedEntityColor.White);
	const changeSort = (column: string, sortOrder: SortOrder) => {
		setSortOrder({ [column]: sortOrder } as SelectedSortOrder);
		dispatch(setSortOrderAction({ sortOrder, column }));
	};

	return (
		<div>
			<button
				style={{ backgroundColor: selectedOrderColor(column, SortOrder.ASC) }}
				className={styles.btn}
				type="button"
				onClick={() => changeSort(column, SortOrder.ASC)}
			>
				{SortOrder.ASC}
			</button>
			{' | '}
			<button
				style={{ backgroundColor: selectedOrderColor(column, SortOrder.DESC) }}
				className={styles.btn}
				type="button"
				onClick={() => changeSort(column, SortOrder.DESC)}
			>
				{SortOrder.DESC}
			</button>
		</div>
	);
};
