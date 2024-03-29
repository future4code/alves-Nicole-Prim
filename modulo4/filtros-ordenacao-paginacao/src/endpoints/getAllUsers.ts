import { Request, Response } from 'express'
import selectAllUsers from "../data/selectAllUsers"

const getAllUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        let name = req.query.name as string || ""

        const users = await selectAllUsers(name)

        if (!users.length) {
            res.statusCode = 404
            throw new Error("No users found")
        }

        res.status(200).send(users)

    } catch (error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}

export default getAllUsers