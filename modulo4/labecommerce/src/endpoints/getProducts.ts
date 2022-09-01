import { Request, Response } from 'express'
import selectProducts from '../data/selectProducts';

export default async function getProducts(req: Request, res: Response):Promise<any>{
    try {
        let order = req.query.order as string
        let search = String(req.query.search) || ""
        let sort = String(req.query.sort)

        if (!order || (order.toUpperCase() !== "ASC" && order.toUpperCase() !== "DESC")) {
            order = "DESC"
         }

        const findProduct = await selectProducts(order, search, sort)

        if (!findProduct.length) {
            res.statusCode = 400
            throw new Error("Nenhum produto encontrado")
        }

        res.status(200).send({findProduct})

    } catch (error: any) {
        res.status(res.statusCode || 500).send({ messagem: error.message || error.sqlMessage });
    }
}