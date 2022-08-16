import express, { Request, Response } from "express";
import cors from "cors";
const fs = require('fs');

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});


const read = () => {
    fs.readFile('./src/data.json', 'utf8', (err: any, data: string) => {
        if (err) {
          console.error(err);
          return;
        }
        tasksList = JSON.parse(data)
        console.log(data);
      });
}
read()

// Ex 1

app.get("/ping", (req: Request, res: Response) => {
    res.send("Pong! 🏓")
})

// Ex 2 

type Afazeres = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

// Ex 3

 let tasksList: Afazeres[] = []

// Ex 4

app.get("/done", (req: Request, res: Response) => {
    const filterDone = tasksList.filter((task) => {
        return task.completed === true
    })
    res.send(filterDone)
})

// Ex 11

const save = () => {
    fs.writeFile('./src/data.json', JSON.stringify(tasksList), (err: any) => {
        if (err) {
          console.error(err);
        }
      });
}

// Ex 5

app.post("/createtask", (req: Request, res: Response) => {
    const { title, completed } = req.body
    const userId = Number(req.headers.authorization)

    tasksList.push({
        userId: userId,
        id: Date.now(),
        title: title,
        completed: completed
    })
    save()
    res.send({ tasksList })
})

// Ex 6

app.put("/changedone/:id", (req: Request, res: Response) => {
    const idTask = Number(req.params.id)
    const changeDone = tasksList.filter((task) => {
        if (task.id === idTask) {
            return task
        }
    }).map((task) => {
        if (task.completed === true) {
            return task.completed = false
        } else {
            return task.completed = true
        }
    })
    res.send(changeDone)
})

// Ex 7

app.delete("/afazeres/:id", (req: Request, res: Response) => {
    const idTask = Number(req.params.id)
    const taskId = tasksList.find((task) => task.id === idTask)
    if (taskId) {
        const deleteTasks = tasksList.filter((task) => {
            return task.id !== idTask
        })
        tasksList = deleteTasks
        res.send(tasksList)
    } else {
        res.status(404).send("Tarefa não encontrada")
    }
})

// Ex 8 e 10

app.get("/afazeres/:id", (req: Request, res: Response) => {
    const userId = Number(req.params.id)
    const filterIdUser = tasksList.map((task) => {
        if (task.userId === userId) {
            return task
        }
    })
    const filterIdOthers = tasksList.map((task) => {
        if (task.userId !== userId) {
            return task
        }
    })
    res.send({
        todos: [{ Usuário: filterIdUser }, { Outros: filterIdOthers }]
    })
})

// Ex 9

// https://documenter.getpostman.com/view/21553035/VUjTm4FS


