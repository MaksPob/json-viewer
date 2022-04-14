import React, { useEffect } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
	fetchUserListAction, setSelectedRowIdAction,
} from '../../store/users/actions';
import { selectUserColumnsDef, selectUserInfo, selectUserList } from '../../store/users/selectors';
import { VirtualScrollTable } from '../components/virtual-scroll-table/VirtualScrollTable';
import baseStyles from '../../base-styles.module.css';
import { SidebarInfo } from '../components/sidebar-info/SidebarInfo';
import { UserInfoEditModal } from '../components/user-info-edit-modal/UserInfoEditModal';
import { UserInfo } from '../../core/user';

export const UsersPage = () => {
	const userList = useAppSelector(selectUserList);
	const userColumnsDef = useAppSelector(selectUserColumnsDef);
	const userInfo = useAppSelector(selectUserInfo);
	const dispatch = useAppDispatch();

	const onSelectRow = (e: React.MouseEvent<HTMLElement>) => {
		const selectedRowId = (e.target as HTMLElement).getAttribute('data-row-id') || '';
		dispatch(setSelectedRowIdAction(selectedRowId));
	};

	useEffect(() => {
		dispatch(fetchUserListAction());
	}, [dispatch]);

	return (
		<div className={baseStyles.layoutRow}>
			<VirtualScrollTable<UserInfo>
				onSelectRow={onSelectRow}
				classNames={[baseStyles.flex70]}
				data={userList}
				rowHeight={50}
				visibleRows={15}
				columnsDef={userColumnsDef}
			/>
			<SidebarInfo
				classNames={[baseStyles.flex30, baseStyles.layoutLeftPadding8]}
				info={userInfo}
			>
				<UserInfoEditModal userInfo={userInfo} />
			</SidebarInfo>
		</div>
	);
};
