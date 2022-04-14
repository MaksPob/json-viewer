import React, { useEffect, useRef, useState } from 'react';
import { Sort } from '../sort/Sort';
import { SelectedEntityColor, VirtualScrollTableProps } from './types';
import styles from './VirtualScrollTable.module.css';

export const VirtualScrollTable = <T, >(props: VirtualScrollTableProps<T>) => {
	const {
		data, rowHeight, visibleRows, columnsDef, classNames, onSelectRow,
	} = props;
	const rootRef = useRef<any>();
	const [start, setStart] = useState<number>(0);
	const [selectedRowId, setSelectedRowId] = useState<string | null>(null);

	const getTopHeight = () => rowHeight * start;
	const getBottomHeight = () => rowHeight * (data.length - (start + visibleRows + 1));

	const gridHeader = columnsDef.map((column: string) => (
		<th key={column}>
			{column}
			<Sort column={column} />
		</th>
	));
	const gridData = data.slice(start, start + visibleRows + 1).map((row: any) => (
		<tr
			onClick={(e) => { setSelectedRowId(row.id); onSelectRow(e); }}
			data-row-id={row.id}
			className={styles.row}
			style={{ height: rowHeight, backgroundColor: selectedRowId === row.id ? SelectedEntityColor.LightBlue : SelectedEntityColor.White }}
			key={row.id}
		>
			{columnsDef.map((columnName: string) => (
				<td
					data-row-id={row.id}
					title={row[columnName]?.toString()}
					className={styles.cell}
					key={row.id + columnName}
				>
					{row[columnName]?.toString()}
				</td>
			))}
		</tr>
	));

	useEffect(() => {
		const rootRefCurrent = rootRef.current;
		const onScroll = (e: React.UIEvent<HTMLDivElement>) => {
			setStart(Math.min(data.length - visibleRows - 1, Math.floor((e.target as Element).scrollTop / rowHeight)));
		};

		rootRefCurrent.addEventListener('scroll', onScroll);

		return () => {
			rootRefCurrent.removeEventListener('scroll', onScroll);
		};
	}, [data.length, visibleRows, rowHeight]);

	return (
		<div className={classNames.join(' ')} style={{ height: rowHeight * visibleRows + 1, overflowY: 'auto', overflowX: 'hidden' }} ref={rootRef}>
			<div style={{ height: getTopHeight() }} />
			<table className={styles.grid}>
				<thead>
					<tr style={{ height: rowHeight }}>
						{gridHeader}
					</tr>
				</thead>
				<tbody>
					{gridData}
				</tbody>
			</table>
			<div style={{ height: getBottomHeight() }} />
		</div>
	);
};
