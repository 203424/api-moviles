import { Request, Response } from 'express';
import { LoginUseCase } from '../../application/LoginUseCase';
import { User } from '../../domain/User';

export class LoginController {
	constructor(readonly loginUseCase: LoginUseCase) {}

	async run(req: Request, res: Response) {
		const body = req.body;

		const user = await this.loginUseCase.run(body.email, body.password);

		if (user instanceof User) {
			res.status(200).json(user);
		} else {
			res.status(500).json({ message: user.message });
		}
	}
}
