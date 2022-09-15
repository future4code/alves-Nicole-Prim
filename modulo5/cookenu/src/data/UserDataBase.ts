import User from "../model/User";
import { IUserDB } from "../types";
import { BaseDataBase } from "./BaseDataBase";


export class UserDataBase extends BaseDataBase {

    public async createUser(user: User) {
        const userDB: IUserDB = {
            id: user.getId(),
            name: user.getName(),
            email: user.getEmail(),
            password: user.getPassword()
        }
        await this.getConnection()
        .insert(userDB)
        .into("users_cookenu")
    }

    public async getUserByEmail(email: string): Promise<IUserDB | undefined> {
        const result: IUserDB[] = await this.getConnection()
            .select("*")
            .from("users_cookenu")
            .where({ email })

        return result[0]
    }

    public async getUserById(id: string) {
        const result: IUserDB[] = await this.getConnection()
            .select("*")
            .from("users_cookenu")
            .where({ id })

        return result[0]
    }

}