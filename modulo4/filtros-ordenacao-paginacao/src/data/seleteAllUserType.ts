import connection from "../connection"

export default async function selectAllUserType(type: string):Promise<any> {
    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula49_exercicio
       WHERE type LIKE "%${type}%"
    `)
 
    return result[0]
 }