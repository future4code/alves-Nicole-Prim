import User from "../model/User";
import BaseDataBase from "./BaseDataBase";

const userTableName = "User";

class UserDataBase extends BaseDataBase {

    public async insertUser(user: User) {

        await this.getConnection().insert({
            id: user.getId(),
            email: user.getEmail(),
            password: user.getPassword()
        }).into(userTableName)
    }

    public async getUserByEmail(email: string) {
        const result = await this.getConnection()
            .select("*")
            .from(userTableName)
            .where({ email: email })

        return result
    }

    public async getUserByPassword(password: string) {
        const result = await this.getConnection()
            .select("*")
            .from(userTableName)
            .where({ password: password })

        return result
    }

    public async getUserById(id: string): Promise<any> {
        const result = await this.getConnection()
          .select("*")
          .from(userTableName)
          .where({ id });
    
        return result[0];
      }

}

export default UserDataBase