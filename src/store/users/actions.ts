import { createAsyncThunk } from '@reduxjs/toolkit';
import { UsersApiService } from '../../data-access/api-services/users.api-service';
import { users } from './reducer';

export enum ActionType {
	FetchUserList = 'fetchUserListAction'
}

export const fetchUserListAction = createAsyncThunk(
	ActionType.FetchUserList,
	async () => {
		const response = await UsersApiService.getUsers();

		return response.data;
	}
);

export const { setSelectedRowIdAction, changeUserInfoAction, setSortOrderAction } = users.actions;
