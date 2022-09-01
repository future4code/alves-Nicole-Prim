import { Request, Response } from 'express'
import selectPurchaseByUser from '../data/selectPurchaseByUser';

export default async function getPurchaseByUser(req: Request, res: Response):Promise<any>{
    try {
        const user_id: number = Number(req.params.user_id)

        if (!user_id) {
            res.statusCode = 400
            throw new Error("Por favor, informe o id do usuário");
        }

        const findPurchaseByUser: any = await selectPurchaseByUser(Number(user_id))

        if (!findPurchaseByUser.length) {
            res.statusCode = 404
            throw new Error("Usuário não encontrado");
        }

        res.status(200).send({ findPurchaseByUser })
    } catch (error: any) {
        res.status(res.statusCode || 500).send({ messagem: error.message || error.sqlMessage });
    }
}
