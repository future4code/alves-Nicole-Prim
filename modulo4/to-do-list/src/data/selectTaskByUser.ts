import connection from "../connection"
import moment from 'moment'

export default async function selectTaskByUser(creator_user_id: number){
    const result = await connection('TaskToDoList')
    .where("creator_user_id", creator_user_id)
    .join('UserToDoList', 'TaskToDoList.creator_user_id', 'UserToDoList.id')
    .select('TaskToDoList.id', 'TaskToDoList.title', 'TaskToDoList.description', 'TaskToDoList.status', 'TaskToDoList.limit_date', 'TaskToDoList.creator_user_id', 
    'UserToDoList.nickname')

    return result
}