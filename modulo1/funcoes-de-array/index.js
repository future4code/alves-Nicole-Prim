// exercicios interpretação:
// 1
// A
// Vai ser impresso na segunte ordem:
// toda a linha que está do indice 0, o número 0 do indice e o array inteiro
// toda a linha que está do indice 1, o número 2 do indice e o array inteiro
// toda a linha que está do indice 2, o número 2 do indice e o array inteiro,

// 2 
// A
// "Amanda Rangel"
// "Laís Petra"
// "Letícia Chijo"

// 3 
// A
// nome: "Amanda Rangel", apelido: "Mandi" 
// nome: "Laís Petra", apelido: "Laura"

// exercicios escrita:
// 1
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

// A
const novoArrayPets = pets.map((item, index, array) => {
   return item.nome
})
console.log(novoArrayPets)

// B
const arraySalsicha = pets.filter((item, index, array) => {
     return item.raca.toLowerCase() == "salsicha"
})
console.log(arraySalsicha)

// C
const msgPoodle = pets.filter((item, index, array) => {
    return item.raca.toLowerCase() == "poodle"
}).map((item) => {
    return `"Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}`
})
console.log(msgPoodle)

// 2 
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 // A
 const arrayNomesProdutos = produtos.map((item, index, array) => {
    return item.nome
 })
 console.log(arrayNomesProdutos)

 // B
  const aplicarDesconto = (elemento) => {
    return{
        nome: elemento.nome,
        preco: (elemento.preco - (elemento.preco * 0.05))
    }
 }
const listaComDesconto = produtos.map(aplicarDesconto)

console.log(listaComDesconto)

// C
const arrayBebidas = produtos.filter((item, index, array) => {
    return item.categoria.toLowerCase() == "bebidas"
})
console.log(arrayBebidas)

// D
const arrayYpe = produtos.filter((produto) => {
    return produto.nome.includes("Ypê")
})
console.log(arrayYpe)

// E
let msgYpe = arrayYpe.map((produto) => {
    return console.log(`Compre ${produto.nome} por ${produto.preco}`)
})

// DESAFIOS
// 1
const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]

// A
const ordenarPokemons = pokemons.map((item, index, array) => {
    return item.nome
 })
ordenarPokemons.sort(function(a, b) {
    if (a.nome < b.nome) {
        return -1
    } else {
        return true
    }
})
console.log(ordenarPokemons.sort())

// B
const apenasTipos = pokemons.map((item, index, array) => {
    return item.tipo
})
const tiposSemRepeticao = [...new Set(apenasTipos)]
console.log(tiposSemRepeticao)