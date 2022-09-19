import { Request, Response } from "express";
import {UserDataBase} from "../data/UserDataBase";
import { EmailExist } from "../err/EmailExist";
import { InvalidCredencial } from "../err/InvalidCredencial";
import { MissingFields } from "../err/MissingFields";
import User from "../model/User";
import Authenticator, { ITokenPayload } from "../services/Authenticator";
import GenerateId from "../services/GenerateId";
import { HashManager } from "../services/HashManager";

class UserController {

    async createUser(req: Request, res: Response) {
        try {
            const { name, email, password } = req.body

            if (!name || !email || !password) {
                throw new MissingFields()
            }

            if (password.length < 6) {
                throw new Error("A senha precisa ter, no mínimo, seis caracteres")
            }

            const userDataBase = new UserDataBase()

            const userDB = await userDataBase.getUserByEmail(email)

            if (userDB) {
                throw new EmailExist()
            }

            const id = new GenerateId().createId();

            const hashManager = new HashManager()

            const hash = await hashManager.hash(password)

            const user = new User(id, name, email, hash)

            await userDataBase.createUser(user)

            const payload: ITokenPayload = { id }

            const token = new Authenticator().generateToken(payload)

            res.status(201).send({ message: "Usuário cadastrado!", token })

        } catch (error: any) {
            res.status(error.statusCode || 500).send(error.message || error.sqlMessage)
        }
    }

    async login(req: Request, res: Response) {
        try {
            const { email, password } = req.body

            if (!email || !password) {
                throw new MissingFields()
            }

            const userData = new UserDataBase()

            const userDB = await userData.getUserByEmail(email)

            if (!userDB) {
                throw new InvalidCredencial();
            }

            const hashManager = new HashManager()
            const correctPassword = await hashManager.compare(password, userDB.password)

            if (!correctPassword) {
                throw new InvalidCredencial();
            }

            const payload: ITokenPayload = {
                id: userDB.id
            }

            const token = new Authenticator().generateToken(payload)

            res.status(200).send({ token })

        } catch (error: any) {
            res.status(error.statusCode || 500).send(error.message || error.sqlMessage)
        }
    }


    async getMyProfile(req: Request, res: Response) {
        try {
            const token = String(req.headers.authorization)

            if (!token) {
                throw new InvalidCredencial();
            }

            const auth = new Authenticator()
            const payload = auth.verifyToken(token)

            const userData = new UserDataBase()
            const userDB = await userData.getUserById(payload.id)

            res.status(200).send({ id: userDB.id, name: userDB.email, email: userDB.email })

        } catch (error: any) {
            res.status(error.statusCode || 500).send({ message: error.message })
        }
    }

}

export default UserController