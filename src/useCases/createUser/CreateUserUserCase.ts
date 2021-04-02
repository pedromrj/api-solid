import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";
import { User } from "../../entities/User";
import { IMailProvider } from "../../providers/IMailProvider";

export class CreateUserUseCase {

    constructor(
        private usersRepository: IUsersRepository,
        private mailProvider: IMailProvider,
    ){}

    async execute(data: ICreateUserRequestDTO) {
        const userExists = await this.usersRepository.findByEmail(data.email);

        if (userExists) {
            throw new Error("User already exists.");
        }

        const user = new User(data);

        await this.usersRepository.save(user);


        await this.mailProvider.sendMail({
            to: {
                name: data.name,
                email: data.email,
            },
            from: {
                name: "Meu App",
                email: "meuapp@meuapp.com",
            },
            subject: "Seja Bem vindo ao meu App",
            body: "<p>Voce ja pode realizar o login no Meu App.</p>"
        });
    }
}