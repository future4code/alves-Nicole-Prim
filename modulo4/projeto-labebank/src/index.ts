import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { Cliente, accounts } from "./data";

const app = express();

app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});

app.post("/clients", (req: Request, res: Response) => {
    try {
        const { name, cpf, dateNasc } = req.body

        if (!name || !cpf || !dateNasc) {
            res.statusCode = 400
            throw new Error("Por favor, informe todos os dados solicitados");
        }

        if (typeof name !== 'string' || typeof cpf !== 'string' || typeof dateNasc !== 'string') {
            res.statusCode = 400
            throw new Error("Algum dos parâmetros não é válido")
        }

        accounts.map(client => {
            if (client.cpf === cpf) {
                res.statusCode = 400
                throw new Error("Este cpf já possui cadastro");
            }
        })

        const getYearNasc = dateNasc.split("/")[2]
        const age = new Date().getFullYear() - Number(getYearNasc)

        if (age < 18) {
            res.statusCode = 400
            throw new Error("Para se cadastrar, você precisa ter no mínimo 18 anos");
        }

        const newClient: Cliente = {
            name,
            cpf,
            dateNasc,
            saldo: 0,
            extrato: []
        }

        accounts.push(newClient);

        res.status(201).send({ message: "Usuário cadastrado com sucesso" })

    } catch (error: any) {
        res.status(res.statusCode || 500).send({ messagem: error.message });
    }
});

app.get("/clients", (req: Request, res: Response) => {
    try {
        res.send(accounts)
    }
    catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }
})

app.get("/clients/:cpf", (req: Request, res: Response) => {
    try {
        const cpf = req.params.cpf

        if (!cpf) {
            res.statusCode = 400
            throw new Error("Por favor, informe o CPF")
        }

        if (typeof cpf !== 'string') {
            res.statusCode = 400
            throw new Error("Por favor, informe um CPF válido")
        }

        const client = accounts.find(client => client.cpf === cpf)

        if (!client) {
            res.statusCode = 404
            throw new Error("Cliente não encontrado")
        }

        res.status(200).send({ Saldo: client.saldo })
    }
    catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }
})

app.put("/clients/:name/:cpf", (req: Request, res: Response) => {
    try {
        const valor = Number(req.body.valor)
        const { name, cpf } = req.params

        if (!name || !cpf) {
            res.statusCode = 400
            throw new Error("Por favor, informe nome e cpf")
        }

        const findClient = accounts.find((client) => client.name === name && client.cpf === cpf)

        if (findClient) {
            if (name && cpf) {
                if (typeof name !== 'string' || typeof cpf !== 'string' || typeof valor !== 'number') {
                    res.statusCode = 400
                    throw new Error("O campo nome e cpf precisam ser uma string. Tente novamente")
                } else {
                    findClient.saldo = findClient.saldo + valor
                    res.status(200).send({ message: `Valor adicionado ao saldo com sucesso`, saldo: findClient.saldo })
                }
            }

        } else {
            res.statusCode = 404
            throw new Error("Cliente não encontrado")
        }
    }
    catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }
})


