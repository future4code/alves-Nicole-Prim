import { Request, Response } from "express";
import UserBusiness from "../business/UserBusiness";

export default class UserController {
    public signup = async (req: Request, res: Response) => {
        try {
            const input: any = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }

            const userBusiness = new UserBusiness()
            const response = await userBusiness.signup(input)
            
            res.status(201).send({message: "Usuário cadastrado com sucesso", response})
        } catch (error: unknown) {
            if (error instanceof Error) {
                return res.status(400).send({ message: error.message })
            }

            res.status(500).send({ message: "Erro inesperado"})
        }
    }

    public login = async (req: Request, res: Response) => {
        try {
            const input: any = {
                email: req.body.email,
                password: req.body.password
            }

            const userBusiness = new UserBusiness()
            const response = await userBusiness.login(input)

            res.status(200).send({message: "Usuário logado", response})

        } catch (error: unknown) {
            if (error instanceof Error) {
                return res.status(400).send({ message: error.message })
            }

            res.status(500).send({ message: "Erro inesperado"})
        }
    }

    public getUsers = async (req: Request, res: Response) => {
        try {
            const input = {token: req.headers.authorization}
            const findByName = req.query.name

            const userBusiness = new UserBusiness()
            const response = await userBusiness.getUsers(input)

            res.status(200).send(response)

        } catch (error: unknown) {
            if (error instanceof Error) {
                return res.status(400).send({ message: error.message })
            }

            res.status(500).send({ message: "Erro inesperado"})
        }



    }
}