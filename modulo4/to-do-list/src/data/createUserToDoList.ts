import connection from "../connection"

export default async function createUserToDoList(name: string, nickname: string, email: string){
    const result = await connection('UserToDoList')
    .insert({
        name,
        nickname,
        email
    })
    return result
}

