import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity()
export class User extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ unique: true })
	username: string;

	@Column()
	email: string;

	@Column()
	password: string;

	@Column()
	location: string;

	@Column()
	birth: string;

	@Column()
	gamertag: string;
}