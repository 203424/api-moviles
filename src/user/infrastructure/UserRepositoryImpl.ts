import { User } from '../domain/User';
import { UserRepository } from '../domain/UserRepository';
import { User as UserEntity } from './database/UserEntity';
import bcrypt from 'bcryptjs';

export class RepositoryImpl implements UserRepository {
	async register(
		name: string,
		username: string,
		email: string,
		password: string,
		location: string,
		birth: string,
		gamertag: string
	): Promise<User | Error> {
		try {
			const existingUser = await UserEntity.findOneBy({ email: email });
			if (existingUser) {
				throw new Error('Ya existe una cuenta asociada al correo');
			}

			const user = new UserEntity();
			user.name = name;
			user.username = username;
			user.email = email;
			user.password = bcrypt.hashSync(password, 10);
			user.location = location;
			user.birth = birth;
			user.gamertag = gamertag;

			const newUser = await UserEntity.save(user);

			return new User(
				newUser.id,
				newUser.name,
				newUser.username,
				newUser.email,
				newUser.password,
				newUser.location,
				newUser.birth,
				newUser.gamertag
			);
		} catch (error) {
			if (error instanceof Error) return error;
		}
		return new Error('Algo salio mal');
	}
	async login(email: string, password: string): Promise<User | Error> {
		try {
			const user = await UserEntity.findOneBy({ email: email });
			console.log(user);
			if (user) {
				const isMatch = bcrypt.compareSync(password, user.password);
				if (isMatch) {
					return new User(
						user.id,
						user.name,
						user.username,
						user.email,
						user.password,
						user.location,
						user.birth,
						user.gamertag
					);
				} else {
					throw new Error('Contraseña incorrecta');
				}
			}
		} catch (error) {
			if (error instanceof Error) return error;
		}

		return new Error('Algo salio mal');
	}
	async getUser(): Promise<User | null> {
		throw new Error('Method not implemented.');
	}
	// async updateUser(
	// 	name: string,
	// 	username: string,
	// 	email: string,
	// 	password: string,
	// 	location: string,
	// 	birth: string,
	// 	gamertag: string
	// ): Promise<User | null> {
	// 	throw new Error('Method not implemented.');
	// }
	async getListUsers(): Promise<User[] | null> {
		throw new Error('Method not implemented.');
	}
}
