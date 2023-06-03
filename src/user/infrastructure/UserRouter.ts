import { Router } from 'express';

import { registerController, loginController } from './dependencies';

export const userRouter = Router();

userRouter.post(
	'/user/register/',
	registerController.run.bind(registerController)
);

userRouter.post('/user/login/', loginController.run.bind(loginController));
