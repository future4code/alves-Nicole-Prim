import { Request, Response } from 'express'
import insertProduct from '../data/insertProduct';

export default async function createProduct(req: Request, res: Response){
    try {
        const { name, price, image_url } = req.body

        if (!name || !price || !image_url) {
            res.statusCode = 400
            throw new Error("Por favor, informe todos os dados solicitados");
        }

        if (typeof name !== 'string' || typeof price !== 'number' || typeof image_url !== 'string') {
            res.statusCode = 400
            throw new Error("Algum dos parâmetros não é válido")
        }

        await insertProduct(name, price, image_url)

        res.status(201).send({ message: "Produto cadastrado com sucesso" })

    } catch (error: any) {
        res.status(res.statusCode || 500).send({ messagem: error.message || error.sqlMessage });
    }
}