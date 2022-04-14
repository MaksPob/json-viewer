import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { users } from '../store/users/reducer';

export const store = configureStore({
	reducer: {
		users: users.reducer,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
