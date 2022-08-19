import express, { Request, Response } from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});

// Ex 1

app.get("/", (req: Request, res: Response) => {
    res.send("Hello from Express")
})

// Ex 2

type Users = {
    id: number
    name: string
    phone: number
    email: string
    website: string
}

// Ex 3

let user: Users[] = [
    {
        id: 1,
        name: "Theodoro",
        phone: 147852,
        email: "theozinho@gmail.com",
        website: "www.theo.com"
    },
    {
        id: 2,
        name: "Milka",
        phone: 963258,
        email: "milkinha@gmail.com",
        website: "www.milka.com"
    },
    {
        id: 3,
        name: "Oreo",
        phone: 852147,
        email: "oreozinho@gmail.com",
        website: "www.oreo.com"
    },
    {
        id: 4,
        name: "Paçoca",
        phone: 789456,
        email: "paçoquinha@gmail.com",
        website: "www.paçoca.com"
    }
]

// Ex 4

app.get("/users", (req: Request, res: Response) => {
    const getUsers = user.map((user) => {
        return user
    })
    res.send(getUsers)
})

// Ex 5 

type Posts = {
    id: number,
    title: string,
    body: string,
    userId: number
}

// Ex 6

let posts: Posts[] = [
    {
        id: 1,
        title: "Theodoro",
        body: "Oi, eu sou o Theodoro e sou muito mimado",
        userId: 1
    },
    {
        id: 2,
        title: "Milka",
        body: "Oi, eu sou a Milka e sou muito feroz",
        userId: 2
    },
    {
        id: 3,
        title: "Oreo",
        body: "Oi, eu sou o Oreo e adoro uma festa",
        userId: 3
    },
    {
        id: 4,
        title: "Oreo",
        body: "Oi, eu sou o Oreo e sou muito legal",
        userId: 3
    },
    {
        id: 5,
        title: "Paçoca",
        body: "Oi, eu sou o Paçoca e estou ficando curado",
        userId: 4
    },
]

// Ex 7

app.get('/posts', (req: Request, res: Response) => {
    res.status(200).send(posts)
})

// Ex 8

app.get('/posts/:userId', (req: Request, res: Response) => {
    let userId = req.params.userId
    const post: Posts[] = posts.filter((post) => {
        return post.userId === Number(userId)
    })
    res.send(post)
})

// Ex 9

app.delete("/posts/:postId", (req: Request, res: Response) => {
    const postId = req.params.postId
    const deletePost = posts.filter((post) => {
        return post.id !== Number(postId)
    })
    posts = deletePost
    res.end()
})

// Ex 10

app.delete("/users/:userId", (req: Request, res: Response) => {
    const userId = req.params.userId
    const deleteUser = user.filter((u) => {
        return u.id !== Number(userId)
    })
    user = deleteUser
    res.end()
})