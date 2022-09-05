import { Request, Response } from 'express'
import insertTask from '../data/insertTask';

export default async function createTask(req: Request, res: Response){
    try {
        const { title, description, limit_date } = req.body
        const creator_user_id: number = req.body.creator_user_id

        if (!title || !description || !limit_date || !creator_user_id ) {
            res.statusCode = 400
            throw new Error("Por favor, informe todos os dados solicitados");
        }

        await insertTask(title, description, limit_date, creator_user_id)

        res.status(201).send({ message: "Tarefa cadastrada com sucesso" })

    } catch (error: any) {
        res.status(res.statusCode || 500).send({ messagem: error.message || error.sqlMessage });
    }
}
