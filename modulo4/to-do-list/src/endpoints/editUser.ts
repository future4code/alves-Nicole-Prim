import { Request, Response } from 'express'
import updateUser from '../data/updateUser'

export default async function editUser(req: Request, res: Response){
    try {
        const id: number = Number(req.params.id)
        const { name, nickname, email } = req.body

        if(name === "") {
            res.statusCode = 400
            throw new Error("Envie um nome válido")
        }

        if(nickname === "") {
            res.statusCode = 400
            throw new Error("Envie um apelido válido")
        }

        if(email === "") {
            res.statusCode = 400
            throw new Error("Envie um email válido")
        }

        await updateUser(id, name, nickname, email)

        res.status(201).send({ message: "Usuário alterado com sucesso" })

    } catch (error: any) {
        res.status(res.statusCode || 500).send({ messagem: error.message || error.sqlMessage });
    }
}
