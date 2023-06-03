export class User {
	constructor(
		readonly id: number,
		readonly name: string,
		readonly username: string,
		readonly email: string,
		readonly password: string,
		readonly location: string,
		readonly birth: string,
		readonly gamertag: string
	) {}
}
