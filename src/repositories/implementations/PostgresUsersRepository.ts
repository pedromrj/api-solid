import { IUsersRepository } from "../IUsersRepository";
import { IUser } from "../../entities/User";

export class PostgresUsersRepository implements IUsersRepository {
    private users: IUser[] = []

    async findByEmail(email: string): Promise<IUser> {
        return this.users.find(x => {
            return x.email === email;
        })
    }

    async save(user: IUser): Promise<void> {
        this.users.push(user);
    }
}