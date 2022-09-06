import axios from "axios";
import { Request, Response } from "express";
import connection from "../connection";
import getAddressCep from "../services/getAddressCep";
import dotenv from 'dotenv'

dotenv.config()

export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { CEP, logradouro, numero, complemento, bairro } = req.body

      if (!CEP) {
         res.statusCode = 422
         throw "É obrigatório informar o CEP"
      }

      const id: string = Date.now().toString()

      const address = await getAddressCep(CEP, bairro, logradouro)

     // const newUser = { id, numero, complemento, address }

      await connection('address_user').insert({
        id,
        CEP,
        logradouro: address?.logradouro,
        numero,
        complemento,
        bairro: address?.bairro,
        cidade: address?.localidade,
        estado: address?.uf
      })
      
      res.status(201).send("Usuário criado!")

   } catch (error: any) {

      if (typeof error === "string") {

         res.send(error)
      } else {
         
         console.log(error.sqlMessage || error.message);
         res.status(500).send("Ops! Um erro inesperado ocorreu")
      }

   }
}