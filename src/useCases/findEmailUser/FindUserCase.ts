import { IUser } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

export class FindUserUseCase {

    constructor(
        private usersRepository: IUsersRepository,
    ){}

    async execute(email: String): Promise<IUser> {
       return this.usersRepository.findByEmail(email);
    }
}