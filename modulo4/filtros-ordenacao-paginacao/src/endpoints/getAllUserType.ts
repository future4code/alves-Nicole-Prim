import { Request, Response } from 'express'
import selectAllUserType from "../data/seleteAllUserType"

const getAllUserType = async (req: Request, res: Response): Promise<void> => {
    try {
        let type = req.params.type as string || ""

        const users = await selectAllUserType(type)

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

export default getAllUserType