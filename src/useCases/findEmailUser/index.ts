import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import { MongoUsersRepository } from "../../repositories/implementations/MongoUsersRepository";
import { FindUserUseCase } from "./FindUserCase";
import { FindUserController } from "./FindUserController";

const mongoUsersRepository = new MongoUsersRepository();

const findUserUseCase = new FindUserUseCase(
    mongoUsersRepository
);


const findUserController = new FindUserController(
    findUserUseCase
);

export { findUserController, findUserUseCase }
