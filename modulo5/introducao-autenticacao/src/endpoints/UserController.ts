import { Request, Response } from "express";
import UserDataBase from "../data/UserDataBase";
import { InvalidCredencial } from "../error/IncorrectPassword";
import { MissingFields } from "../error/MissingFields";
import User from "../model/User";
import Authenticator from "../services/Authenticator";
import GenerateId from "../services/generateId";

export class UserController {
    async createUser(req: Request, res: Response) {
        try {

            const { email, password } = req.body
            const userDB = new UserDataBase()

            if (!email || !password) {
                res.statusCode = 422
                throw new Error("Preencha os campos 'password' e 'email'")
            }

            if (email.indexOf("@") === -1) {
                throw new Error("Invalid email");
            }

            if (password.length < 6) {
                throw new Error("A senha deve ter no mínimo 06 caracteres");
            }

            const id = new GenerateId().createId() as string

            const newUser = new User(id, email, password)

            await userDB.insertUser(newUser)

            const token = new Authenticator().generateToken(id)

            res.status(201).send({ message: "Usuário criado com sucesso", token })

        } catch (error: any) {
            if (res.statusCode === 200) {
                res.status(500).send({ message: "Internal server error" })
            } else {
                res.send({ message: error.message })
            }
        }
    }

    async login(req: Request, res: Response) {
        try {
            const { email, password } = req.body

            if (!email || !password) {
                throw new MissingFields()
            }

            const userData = new UserDataBase()

            const senhaCorreta = await userData.getUserByPassword(password)
            const EmailExist = await userData.getUserByEmail(email)

            if (!senhaCorreta.length && !EmailExist.length) {
                throw new InvalidCredencial();
            }

            const token = new Authenticator().generateToken(senhaCorreta[0].id)

            res.status(200).send({ token })

        } catch (error: any) {
            res.status(error.statusCode || 500).send({ message: error.message })
        }
    }

    async getUser(req: Request, res: Response) {
        try {
            const token = req.headers.authorization!

            const authenticationData = new Authenticator().verifyToken(token);

            const userData = new UserDataBase()

            const user = await userData.getUserById(authenticationData.id);
            console.log(user)
            res.status(200).send({
                id: user.id,
                email: user.email,
            });
        } catch (err: any) {
            res.status(400).send({
                message: err.message,
            });
        }
    };

}

