import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { users, User, UserType } from "./data";

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

const fs = require('fs');

const read = () => {
 fs.readFile('./src/data.ts', 'utf8', (err: any, data: string) => {
  if (err) {
    console.error(err);
    return;
  }
})
}

read()

const save = () => {
fs.writeFile('./src/data.ts', (err:any) => {
    if (err) {
      console.error(err);
    }
    // file written successfully
  })
}

// Ex 1
// a) método get
// b) "/users"
app.get("/users", (req: Request, res: Response) => {
    try {
        res.send(users)
    }
    catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }
})

// Ex 3
// a) por query params
app.get("/users/search", (req: Request, res: Response) => {
    try {
        const name = req.query.name

        if (!name) {
            res.statusCode = 400
            throw new Error("Por favor, informe o nome")
        }

        const userByName = users.find((user) => user.name === name)

        if (!userByName) {
            res.statusCode = 404
            throw new Error("Usuário não encontrado");
        }

        res.status(200).send(userByName)
    }
    catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }
})

// Ex 2
// a) por path params
// b) fazendo validação dentro do try
app.get("/users/:type", (req: Request, res: Response) => {
    try {
        const type: UserType = req.params.type as UserType

        if (!type) {
            res.statusCode = 400
            throw new Error("Por favor, informe o tipo")
        }

        if (type !== UserType.ADMIN && type !== UserType.NORMAL) {
            res.statusCode = 400
            throw new Error("Por favor, informe um tipo válido")
        }

        const userByType = users.filter((user) => {
            if (user.type === type) {
                return user
            }
        })

        res.send(userByType)
    }
    catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }
})

// Ex 4
// a) quando o método é alterado para put, nada muda. O usuário continua sendo criado.
// b) não considero apropriado por boa prática, o put deve ser utilizado para atualizar
app.post("/users", (req: Request, res: Response) => {
    try {
        const { name, email, type, age } = req.body;

        if (!name || !email || !type || !age) {
            res.statusCode = 400
            throw new Error("Por favor, informe todos os dados solicitados");
        }

        if (typeof name !== 'string' || typeof email !== 'string' || type.toUpperCase() !== UserType.NORMAL &&
            type.toUpperCase() !== UserType.ADMIN || typeof age !== 'number') {
            res.statusCode = 400
            throw new Error("Algum dos parâmetros não é válido")
        }

        const newUser: User = {
            id: Date.now(),
            name,
            email,
            type,
            age,
        };

        users.push(newUser);

        res.status(201).send({ message: "Usuário criado com sucesso" });
        save()
    } catch (error: any) {
        res.status(res.statusCode || 500).send({ messagem: error.message });
    }
});


// Ex 5
app.put("/changename/:id", (req: Request, res: Response) => {
    try {
        const name = req.body.name
        const iduser = Number(req.params.id)

        if (!iduser) {
            res.statusCode = 400
            throw new Error("Por favor, informe o id do usuário")
        }

        if (!name) {
            res.statusCode = 400
            throw new Error("Por favor, informe o nome")
        }

        const findUser = users.find((user) => user.id === iduser)

        if (findUser) {
            if (name) {
                if (typeof name !== 'string') {
                    res.statusCode = 400
                    throw new Error("O campo nome precisa ser uma string. Tente novamente")
                } else {
                    findUser.name = name
                }
            }
            res.status(200).end()
        } else {
            res.statusCode = 404
            throw new Error("Usuário não encontrado")
        }
    }
    catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }
})

// Ex 6
app.patch("/changename/:id", (req: Request, res: Response) => {
    try {
        const name = req.body.name
        const iduser = Number(req.params.id)

        if (!iduser) {
            res.statusCode = 400
            throw new Error("Por favor, informe o id do usuário")
        }

        if (!name) {
            res.statusCode = 400
            throw new Error("Por favor, informe o nome")
        }

        const findUser = users.find((user) => user.id === iduser)

        if (findUser) {
            if (name) {
                if (typeof name !== 'string') {
                    res.statusCode = 400
                    throw new Error("O campo nome precisa ser uma string. Tente novamente")
                } else {
                    findUser.name = name
                }
            }
            res.status(200).end()
        } else {
            res.statusCode = 404
            throw new Error("Usuário não encontrado")
        }
    }
    catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }
})

// Ex 7
app.delete("/users/:id", (req: Request, res: Response) => {
    try {
        const iduser = Number(req.params.id)
        const findUser = users.find((user) => user.id === iduser)
        if (findUser) {
            const deleteuser = users.findIndex((user) => {
                return user.id === iduser
            })
            users.splice(deleteuser, 1)
            res.send(users)
        } else {
            res.statusCode = 404
            throw new Error("Usuário não encontrado")
        }
    }
    catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }

})