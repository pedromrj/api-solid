import { Request , Response } from "express";
import { FindUserUseCase } from "./FindUserCase";

export class FindUserController {
    constructor(
        private findUserUseCase: FindUserUseCase
    ){}

    async handler(request: Request, response: Response): Promise<Response> {
        const email = request.query.email;

        if (email)
            return response.status(400).json({
                message: "Param email not found!"
            });

        const user = await this.findUserUseCase.execute(new String(email));

        if (user) {
            return response.status(200).json(user);
        } else {
            return response.status(404).json({
                message: "User not found!"
            });
        }
        
    }
}