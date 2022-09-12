import connection from "../connection"

export default async function insertUser(name: string, email: string, password: string,){
    await connection('labecommerce_users')
    .insert({
        name,
        email,
        password
    })
}