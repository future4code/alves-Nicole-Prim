import connection from "../connection"

export default async function createUserToDoList(id: number, name: string, nickname: string, email: string){
    const result = await connection('UserToDoList')
    .update({
        name,
        nickname,
        email
    })
    .where({id})
    return result
}
