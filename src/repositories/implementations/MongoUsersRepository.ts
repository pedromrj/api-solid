import { User, IUser } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

export class MongoUsersRepository implements IUsersRepository {

    async findByEmail(email: String): Promise<IUser> {
        const lista = (await User.find());

        return lista.find(x => {
            return x.email === email;
        });
    }

    async save(user: IUser): Promise<void> {
        User.create({
            user
        });
    }

}