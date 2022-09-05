import connection from "../connection"

export default async function selectTaskById(id: number){
    const result = await connection('TaskToDoList')
    .where("TaskToDoList.id", id)
    .join('UserToDoList', 'TaskToDoList.creator_user_id', 'UserToDoList.id')
    .select('TaskToDoList.id', 'TaskToDoList.title', 'TaskToDoList.description', 'TaskToDoList.status', 'TaskToDoList.limit_date', 'TaskToDoList.creator_user_id', 
    'UserToDoList.nickname')

    return result
}
