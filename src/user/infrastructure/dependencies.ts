import { RegisterUseCase } from '../application/RegisterUseCase';

import { RegisterController } from './controllers/RegisterController';

import { RepositoryImpl } from './UserRepositoryImpl';

const repositoryImpl = new RepositoryImpl();

const registerUseCase = new RegisterUseCase(repositoryImpl);

export const registerController = new RegisterController(registerUseCase);
