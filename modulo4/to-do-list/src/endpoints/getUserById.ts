import { Request, Response } from 'express'
import selectUserById from '../data/selectUserById';


export default async function getUserById(req: Request, res: Response){
    try {
        const id = req.params.id

        if (!id) {
            res.statusCode = 400
            throw new Error("Por favor, informe o id");
        }

        const findUser = await selectUserById(Number(id))

        if (!findUser.length) {
            res.statusCode = 404
            throw new Error("Usuário não encontrado");
        }

        res.status(200).send({findUser})

    } catch (error: any) {
        res.status(res.statusCode || 500).send({ messagem: error.message || error.sqlMessage });
    }
}