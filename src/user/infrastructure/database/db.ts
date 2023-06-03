import { DataSource } from 'typeorm';
import dotenv from 'dotenv';
import { User } from './UserEntity';

dotenv.config();

export const AppDataSource = new DataSource({
	type: 'postgres',
	host: process.env.DB_HOST,
	port: 5432,
	username: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_DATABASE,
	synchronize: true,
	logging: true,
	entities: [User]
});