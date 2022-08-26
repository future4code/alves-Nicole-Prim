import connection from "../connection"

export default async function insertTask(title: string, description: string, limit_date: string, creator_user_id: number){
    const result = await connection('TaskToDoList')
    .insert({
        title,
        description,
        limit_date: limit_date.split('/').reverse().join("-"),
        creator_user_id
    })
    return result
}
