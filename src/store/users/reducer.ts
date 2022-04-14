import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserInfo } from '../../core/user';
import { SortOrder } from '../../shared/types';
import { fetchUserListAction } from './actions';
import { UsersState } from './types';

const initialState: UsersState = {
	isLoadingUsers: false,
	userList: undefined,
	selectedRowId: undefined,
};

export const users = createSlice({
	name: 'users',
	initialState,
	reducers: {
		setSelectedRowIdAction: (state, action: PayloadAction<string>) => {
			state.selectedRowId = action.payload;
		},
		changeUserInfoAction: (state, action: PayloadAction<UserInfo>) => {
			const foundUserIndex: number | undefined = state.userList?.findIndex(user => user.id === action.payload.id);

			if (state.userList && foundUserIndex && foundUserIndex !== -1) {
				state.userList[foundUserIndex] = {
					...action.payload,
				};
			}
		},
		setSortOrderAction: (state, action: PayloadAction<Record<string, string>>) => {
			const { column, sortOrder } = action.payload;
			const sortVal = sortOrder === SortOrder.ASC ? 1 : -1;

			state.userList = (state.userList as UserInfo[]).sort((a: UserInfo, b: UserInfo) => (a[column] > b[column] ? sortVal : -sortVal));
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchUserListAction.fulfilled, (state, action) => {
				state.userList = action.payload;
			});
	},
});
