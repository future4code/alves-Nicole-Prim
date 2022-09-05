import connection from "../connection"

export default async function selectUserById(id: number){
    const result = await connection('UserToDoList')
    .select('*')
    .where({id})
    return result
}
