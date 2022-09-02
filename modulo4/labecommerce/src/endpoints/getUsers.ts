import { Request, Response } from 'express'
import selectPurchasesByUser from '../data/selectPurchaseByUser';
import selectUsers from '../data/selectUsers';

export default async function getUsers(req: Request, res: Response){
    try {
        const findUser = await selectUsers()

        if (!findUser.length) {
            res.statusCode = 400
            throw new Error("Nenhum usuário encontrado")
        }

        for (const user of findUser) {
            const purchases = await selectPurchasesByUser(user.id);
      
            user.purchases = purchases;
          }

        res.status(200).send(findUser)

    } catch (error: any) {
        res.status(res.statusCode || 500).send({ messagem: error.message || error.sqlMessage });
    }
}