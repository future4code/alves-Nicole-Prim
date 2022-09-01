import connection from "../connection"

export default async function selectProducts(order: string, search: string, sort: string) {
    const result = await connection
    .select("*")
    .from("labecommerce_products")
    .where("name", "LIKE", `%${search}%`)
    .orderBy(sort, order)

    return result
}