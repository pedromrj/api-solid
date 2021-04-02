import { IUser } from "../entities/User";

export interface IUsersRepository {
    findByEmail(email: String): Promise<IUser>;
    save(user: IUser): Promise<void>;
}