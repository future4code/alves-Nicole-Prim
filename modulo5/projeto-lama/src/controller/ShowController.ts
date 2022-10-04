import { Request, Response } from "express";
import { ShowBusiness } from "../business/ShowBusiness";
import { BaseError } from "../errors/BaseError";

export class ShowController {
    constructor(
        private showBusiness: ShowBusiness
    ) { }

    public createRecordShow = async (req: Request, res: Response) => {
        try {
            const input = {
                band: req.body.band,
                starts_at: req.body.starts_at,
                token: req.headers.authorization
            }

            const response = await this.showBusiness.createRecordShow(input)
            res.status(200).send(response)

        } catch (error) {
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: "Erro inesperado" })
        }
    }

    public getAllShows = async (req: Request, res: Response) => {
        try {

            const response = await this.showBusiness.getAllShows()

            res.status(200).send(response)

        } catch (error) {
             if(error instanceof Error) {
                return res.status(res.statusCode).send({message: error.message})
            } 
            res.status(500).send("Erro inesperado")
        }
    }


}