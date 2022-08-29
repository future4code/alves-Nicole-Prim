import { Request, Response } from 'express'
import app from './app'
import connection from './connection';

const searchActor = async (name: string) => {
    const [result] = await connection.raw(`
      SELECT * FROM Actor WHERE name = "${name}"
    `)
    return console.log(result)
}

app.get("/actor/:name", async (req: Request, res: Response) => {
    try {
        const name = req.params.name

        console.log(await searchActor(name))

        res.end()
    } catch (error: any) {
        console.log(error.message)
        res.status(500).send("Erro inesperado")
    }
})

const countActors = async (gender: string) => {
    const result = await connection.raw(`
      SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
    `);
    const count = result[0][0].count;
    return count;
};

app.get("/actor", async (req: Request, res: Response) => {
    try {
      const count = await countActors(req.query.gender as string);
      res.status(200).send({
        quantity: count,
      });
    } catch (err: any) {
      res.status(400).send({
        message: err.message,
      });
    }
  });

const updateActor = async (id: string, salary: number) => {
    await connection("Actor")
        .update({
            salary: salary,
        })
        .where("id", id);
};

const deleteActor = async (id: string) => {
    await connection("Actor")
        .delete()
        .where("id", id);
};

const avgSalary = async (gender: string) => {
    const result = await connection("Actor")
        .avg("salary as average")
        .where({ gender });

    return result[0].average;
};