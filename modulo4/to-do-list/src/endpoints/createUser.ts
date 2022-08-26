import { Request, Response } from 'express'
import createUserToDoList from '../data/createUserToDoList';

export default async function createUser(req: Request, res: Response){
    try {
        const { name, nickname, email } = req.body

        if (!name || !nickname || !email) {
            res.statusCode = 400
            throw new Error("Por favor, informe todos os dados solicitados");
        }

        if (typeof name !== 'string' || typeof nickname !== 'string' || typeof email !== 'string') {
            res.statusCode = 400
            throw new Error("Algum dos parâmetros não é válido")
        }

        const newUser = await createUserToDoList(name, nickname, email)

        res.status(201).send({ message: "Usuário cadastrado com sucesso" })

    } catch (error: any) {
        res.status(res.statusCode || 500).send({ messagem: error.message || error.sqlMessage });
    }
}

