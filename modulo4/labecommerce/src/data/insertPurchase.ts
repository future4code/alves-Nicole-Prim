import connection from "../connection";

export default async function insertPurchase(user_id: number, product_id:number, quantity:number, total_price:number) {
    await connection("labecommerce_purchases")
        .insert({
            user_id,
            product_id,
            quantity,
            total_price
        })
}