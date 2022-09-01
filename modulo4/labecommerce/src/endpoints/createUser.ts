import { Request, Response } from 'express'
import insertUser from '../data/insertUser';

export default async function createUser(req: Request, res: Response){
    try {
        const { name, email, password } = req.body

        if (!name || !email || !password) {
            res.statusCode = 400
            throw new Error("Por favor, informe todos os dados solicitados");
        }

        if (typeof name !== 'string' || typeof email !== 'string' || typeof password !== 'string') {
            res.statusCode = 400
            throw new Error("Algum dos parâmetros não é válido")
        }

        await insertUser(name, email, password)

        res.status(201).send({ message: "Usuário cadastrado com sucesso" })

    } catch (error: any) {
        res.status(res.statusCode || 500).send({ messagem: error.message || error.sqlMessage });
    }
}