import { UserRepository } from '../domain/UserRepository';

export class RegisterUseCase {
	constructor(readonly userRepository: UserRepository) {}

	async run(
		name: string,
		username: string,
		email: string,
		password: string,
		location: string,
		birth: string,
		gamertag: string
	) {
		const user = await this.userRepository.register(
			name,
			username,
			email,
			password,
			location,
			birth,
			gamertag
		);

		return user;
	}
}
