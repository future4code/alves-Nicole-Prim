import connection from "../connection"

export default async function selectAllUsers() {
    const result = await connection
    .select("*")
    .from("UserToDoList")

    return result
}
