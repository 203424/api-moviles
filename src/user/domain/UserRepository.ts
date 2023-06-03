import { User } from './User';

export interface UserRepository {
	register(
		name: string,
		username: string,
		email: string,
		password: string,
		location: string,
		birth: string,
		gamertag: string
	): Promise<User | Error>;
	login(email: string, password: string): Promise<User | Error>;
	getUser(): Promise<User | null>;
	// updateUser(
	// 	name: string,
	// 	username: string,
	// 	email: string,
	// 	password: string,
	// 	location: string,
	// 	birth: string,
	// 	gamertag: string
	// ): Promise<User | null>;
    getListUsers(): Promise<User[] | null>
}
