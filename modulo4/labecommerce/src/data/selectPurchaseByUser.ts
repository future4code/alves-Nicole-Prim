import connection from "../connection";

export default async function selectPurchasesByUser(user_id:number) {
    const result = await connection("labecommerce_purchases")
        .select("*")
        .where({user_id: user_id})
    return result
} 