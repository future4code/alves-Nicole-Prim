import { Request, Response } from 'express'
import selectTaskByUser from '../data/selectTaskByUser';
import moment from 'moment'

export default async function getTaskByUser(req: Request, res: Response){
    try {
        const creator_user_id: number = Number(req.query.creator_user_id)

        if (!creator_user_id) {
            res.statusCode = 400
            throw new Error("Por favor, informe o id do usuário que criou a tarefa");
        }

        const findTaskByUser = await selectTaskByUser(Number(creator_user_id))

        if (!findTaskByUser.length) {
            res.statusCode = 404
            throw new Error("Usuário não encontrado");
        }

        res.status(200).send({ findTaskByUser: findTaskByUser })
    } catch (error: any) {
        res.status(res.statusCode || 500).send({ messagem: error.message || error.sqlMessage });
    }
}