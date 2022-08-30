import { Request, Response } from "express"
import  connection from "../connection"

export async function getAll(
   req: Request,
   res: Response
): Promise<void> {
   try {
      const name = req.query.name || ""
      let type = req.query.type as string || ""
      let sort = req.query.sort
      let order = req.query.order as string
      let page = Number(req.query.page)

      if(!(sort === "name" || sort === "type")) {
         sort = "name"
      }
      if (!order || (order.toUpperCase() !== "ASC" && order.toUpperCase() !== "DESC")) {
         order = "DESC"
      }
      if (page < 1 || isNaN(page)) {
         page = 1
      }
      const size = 10;

      const offset = size * (page - 1);

      const result = await connection("aula49_exercicio")
            .where("name", "LIKE", `%${name}%`)
            .where("type", "LIKE", `%${type}%`)
            .orderBy(sort, order)
            .limit(size)
            .offset(offset)


      if (!result.length) {
         throw new Error("Não encontramos nenhum usuário")
      }
      res.status(200).send(result)

   } catch (error: any) {
      res.status(500).send(error.message || "Internal server error")
   }
}
