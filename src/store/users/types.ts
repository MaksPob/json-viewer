import { UserInfo } from '../../core/user';

export interface UsersState {
	isLoadingUsers: boolean;
	userList: UserInfo[] | undefined;
	selectedRowId: string | undefined;
}
