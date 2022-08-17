import express, { Request, Response } from "express";
import cors from "cors";
import { products, Product } from "./data";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});

// Ex 1

app.get("/test", (req: Request, res: Response) => {
    res.status(200).send("API funcionou")
})

// Ex 3 e 7

app.post("/createproduct", (req: Request, res: Response) => {
    try {
        const { product, price } = req.body

        if (!product || !price) {
            res.statusCode = 400
            throw new Error("O campo produto ou preço não foi preenchido. Tente novamente")
        }

        if (typeof product !== 'string') {
            res.statusCode = 400
            throw new Error("O campo produto precisa ser um texto entre aspas. Tente novamente")
        }

        if (typeof price !== 'number') {
            res.statusCode = 400
            throw new Error("O campo preço precisa ser um número. Tente novamente")
        }

        if (price <= 0) {
            res.statusCode = 400
            throw new Error("O campo preço precisa ser maior que 0. Tente novamente")
        }

        products.push({
            id: Date.now().toString(),
            product: product,
            price: price
        })

        res.status(201).send({ products })
    }
    catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }
})

// Ex 4 e 10

app.get("/products", (req: Request, res: Response) => {
    try {
        res.send(products)
    } catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }
})

// Ex 5, 8 e 11

app.put("/changepricename/:id", (req: Request, res: Response) => {
    try {
        const product = req.body.product as string
        const price = req.body.price
        const idproduct = req.params.id

        if (!idproduct) {
            res.statusCode = 400
            throw new Error("Por favor, informe o id do produto")
        }

        if (!price && !product) {
            res.statusCode = 400
            throw new Error("Por favor, informe os parâmetros")
        }

        const findProduct = products.find((prod) => prod.id === idproduct)

        if (findProduct) {
            if (price) {
                if (typeof price !== 'number') {
                    res.statusCode = 400
                    throw new Error("O campo preço precisa ser um número. Tente novamente")
                } if (price <= 0) {
                    res.statusCode = 400
                    throw new Error("O campo preço precisa ser maior que 0. Tente novamente")
                } else {
                    findProduct.price = price
                }
            } 
            if (product) {
                if (typeof product !== 'string') {
                    res.statusCode = 400
                    throw new Error("O campo produto precisa ser um texto entre aspas. Tente novamente")
                } if (product === "") {
                    res.statusCode = 400
                    throw new Error("O campo produto está vazio. Tente novamente")
                } else {
                    findProduct.product = product
                }
            } 
            res.status(200).send({ products })
        } else {
        res.statusCode = 404
        throw new Error("Produto não encontrado")
    }
}
    catch (error: any) {
    res.status(res.statusCode || 500).send({ message: error.message })
}
})

// Ex 6 e 9

app.delete("/products/:id", (req: Request, res: Response) => {
    try {
        const idproduct = req.params.id
        const findProduct = products.find((prod) => prod.id === idproduct)
        if (findProduct) {
            const deleteproducts = products.findIndex((product) => {
                return product.id === idproduct
            })
            products.splice(deleteproducts, 1)
            res.send({ products })
        } else {
            res.statusCode = 404
            throw new Error("Produto não encontrado")
        }
    }
    catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }

})