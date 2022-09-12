import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config();


class Authenticator {

    generateToken(id: string) {

        const token = jwt.sign(
            {
                id
            },
            process.env.JWT_KEY as string,
            {
                expiresIn: process.env.EXPIRES_IN
            }
        );

        return token
    }

    verifyToken(token: string) {

        const verify = jwt.verify(token, process.env.JWT_KEY as string) as any
        const result = {
            id: verify.id,
          };
        return result
    }
}

export default Authenticator