import { Router } from 'express';

import { registerController } from './dependencies';

export const userRouter = Router();

userRouter.post(
	'/user/register/',
	registerController.run.bind(registerController)
);
