import { Request, Response } from 'express'
import selectAllUsers from '../data/selectAllUsers';


export default async function getAllUsers(req: Request, res: Response){
    try {

        const findUser = await selectAllUsers()

        if (!findUser.length) {
            res.statusCode = 400
            throw new Error("Nenhum usuário encontrado")
        }

        res.status(200).send({findUser: findUser})

    } catch (error: any) {
        res.status(res.statusCode || 500).send({ messagem: error.message || error.sqlMessage });
    }
}