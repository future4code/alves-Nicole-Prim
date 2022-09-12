import connection from "../connection";

export default async function selectPurchasesByUser(user_id:number) {
    const result = await connection("labecommerce_purchases")
        .select(
            "labecommerce_users.name",
            "labecommerce_products.name",
            "labecommerce_purchases.quantity",
            "labecommerce_purchases.total_price"
          )
          .join(
            "labecommerce_users",
            "labecommerce_users.id",
            "=",
            "labecommerce_purchases.user_id"
          )
          .join(
            "labecommerce_products",
            "labecommerce_products.id",
            "=",
            "labecommerce_purchases.product_id"
          )
          .where("user_id", `${user_id}`)


    return result
} 