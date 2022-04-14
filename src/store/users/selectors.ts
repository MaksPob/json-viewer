import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { UserInfo } from '../../core/user';

export const selectUserList = (state: RootState): UserInfo[] => state.users.userList || [];
export const selectUserColumnsDef = (state: RootState): string[] => Object.keys(state.users.userList?.[0] || {});
export const selectSelectedUserId = (state: RootState): string | undefined => state.users.selectedRowId;

export const selectUserInfo = createSelector([selectUserList, selectSelectedUserId], (userList, selectedUserId): UserInfo | undefined => {
	return userList.find(user => user?.id === selectedUserId);
});
