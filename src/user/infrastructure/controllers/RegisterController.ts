import { Request, Response } from "express";
import { RegisterUseCase } from "../../application/RegisterUseCase";
import { User } from "../../domain/User";

export class RegisterController {
    constructor (readonly registerUseCase: RegisterUseCase){}

    async run(req: Request, res: Response){
        const body = req.body as User;

        const user = await this.registerUseCase.run(body.name, body.username, body.email, body.password, body.location, body.birth, body.gamertag)

        if(user instanceof User){
            res.status(201).json(user);
        }else{
            res.status(500).json({message: user.message});
        }
    }
}