import { UserRepository } from '../domain/UserRepository';

export class LoginUseCase {
	constructor(readonly userRepository: UserRepository) {}

	async run(email: string, password: string) {
		const user = await this.userRepository.login(email, password);
		return user;
	}
}
