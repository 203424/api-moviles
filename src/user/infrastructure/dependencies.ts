import { RegisterUseCase } from '../application/RegisterUseCase';
import { LoginUseCase } from '../application/LoginUseCase';

import { RegisterController } from './controllers/RegisterController';
import { LoginController } from './controllers/LoginController';

import { RepositoryImpl } from './UserRepositoryImpl';

const repositoryImpl = new RepositoryImpl();

const registerUseCase = new RegisterUseCase(repositoryImpl);
const loginUseCase = new LoginUseCase(repositoryImpl);

export const registerController = new RegisterController(registerUseCase);
export const loginController = new LoginController(loginUseCase);
