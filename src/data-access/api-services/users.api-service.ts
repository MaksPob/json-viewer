import responseData from '../../core/users.json';

// imitation http service
// data has any type, because users.json too big
export class UsersApiService {
	static getUsers() {
		return new Promise<{ data: any }>(
			(resolve) => {
				setTimeout(() => resolve({ data: responseData }), 500);
			}
		);
	}
}
