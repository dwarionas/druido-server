import User from "../models/user.model.ts";
import { createUserInterface, UserInterface } from "../types/user.interface.ts";

class UserService {
    async create(data: createUserInterface) {
        const candidate = await User.findOne({ sbUserID: data.sbUserID });
        if (candidate) {
            throw new Error('User already exist');
        }

        const user = await User.create(data);

        return user;
    }

    async getUser(id: string): Promise<UserInterface> {
        const candidate = await User.findOne({ sbUserID: id });
        if (!candidate) {
            throw new Error("User doesn't exist");
        }

        return candidate;
    }
}

export default new UserService();