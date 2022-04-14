import React from 'react';

import styles from './SidebarInfo.module.css';
import { SidebarInfoProps } from './types';

export const SidebarInfo = (props: SidebarInfoProps) => {
	const { classNames, info, children } = props;

	return (
		<aside className={classNames.join(' ')}>
			<div className={styles.header}>
				{info ? `About ${info.name}` : 'Not info'}
			</div>
			{info && (
				<div>
					<ul>
						{Object.entries(info).map(([key, value]) => (
							<li key={key} className={styles.item}>
								<span className={styles.label}>{`${key}: `}</span>
								{value?.toString()}
							</li>
						))}
					</ul>
					{children}
				</div>
			)}
		</aside>
	);
};
