export interface VirtualScrollTableProps<T> {
	data: T[];
	rowHeight: number;
	visibleRows: number;
	columnsDef: string[];
	classNames: string[];
	onSelectRow: (e: React.MouseEvent<HTMLElement>) => void;
}

export enum SelectedEntityColor {
    LightBlue = '#c9f4ff',
    White = '#ffffff'
}
