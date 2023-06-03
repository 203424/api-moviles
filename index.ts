import 'reflect-metadata';
import app from './src/app';
import { AppDataSource } from './src/user/infrastructure/database/db';
import dotenv from 'dotenv';
import { userRouter } from './src/user/infrastructure/UserRouter';

dotenv.config();
const port = process.env.PORT ?? 3000;

async function main() {
	try {
		await AppDataSource.initialize();

		app.use('/api', userRouter);

		app.listen(port, () => {
			console.log(`Server in port ${port}`);
		});
	} catch (error) {
		console.error(error);
	}
}

main().catch((e) => console.log(e));
