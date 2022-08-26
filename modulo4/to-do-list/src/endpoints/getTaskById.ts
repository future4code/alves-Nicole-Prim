import { Request, Response } from 'express'
import selectTaskById from '../data/selectTaskById';

export default async function getTaskById(req: Request, res: Response){
    try {
        const id: number = Number(req.params.id)

        if (!id) {
            res.statusCode = 400
            throw new Error("Por favor, informe o id");
        }

        const findTask = await selectTaskById(Number(id))

        if (!findTask.length) {
            res.statusCode = 404
            throw new Error("Tarefa não encontrado");
        }

        res.status(200).send({
            title: findTask[0].title,
            description: findTask[0].description,
            limit_date: findTask[0].split('-').reverse().join('/'),
            status: findTask[0].status,
            creator_user_id: findTask[0].creator_user_id})

    } catch (error: any) {
        res.status(res.statusCode || 500).send({ messagem: error.message || error.sqlMessage });
    }
}