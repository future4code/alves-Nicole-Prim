// exercicios interpretação:
// 1
// O código vai ser executado sempre que o i for menor que 5
// Vai dar erro ao imprimir no console porque ele precisa estar dentro do bloco

// 2
// A
// Vai ser impresso no console os números maiores que 18, que são: 19, 21, 23, 25, 27, 30
// B
// Sim, para acessar o indice de cada elemento poderia usar o for..of... da seguinte forma:
// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//    console.log("indice", lista.indexOf(numero))
//     console.log("numero", numero)
// }

// 3 
// O resultado no console seria:
// *
// **
// ***
// ****

// exercicios de escrita:
// 1
let petUsuario = Number(prompt("Quantos pets você tem?"))
if (petUsuario === 0) {
    console.log("Que pena! Você pode adotar um pet!")
} else if  (petUsuario > 0) {
    let arrayPetsUsuario = []
    while (arrayPetsUsuario.length < petUsuario) {
        let indicaPet = prompt("Digite o nome dos seus pets")
        arrayPetsUsuario.push(indicaPet)
    }
    console.log(arrayPetsUsuario)
}

// 2 
let arrayOriginal = [4, 5, 6, 7, 8, 9]

// A
const imprimeArray = (array) => {
    console.log(array)
}
imprimeArray(arrayOriginal)

// B
const divideArray = (n) => {
    let resultado = []
    for (let i of n) {
        resultado.push(i / 10)
    }
    return resultado
}

console.log(divideArray(arrayOriginal))

// C
const numerosPares = (arrayNumeros) => {
    let arrayPares = []
    for (let i of arrayNumeros) {
        if (i % 2 === 0) {
            arrayPares.push(i)
        }
    }
    return arrayPares
}
console.log(numerosPares(arrayOriginal))

// D
const arrayStrings = (arrayDeNumeros) => {
    let novoArray = []
    for (let i of arrayDeNumeros) {
        novoArray.push(`O elemento do índex ${arrayDeNumeros.indexOf(i)} é: ${i} `)
    }
    return novoArray
}
console.log(arrayStrings(arrayOriginal))

// E
const maiorEMenor = (listaNumeros) => {
    let maior = 0
    let menor = 1000
    for (let i of listaNumeros) {
        if (i > maior) {
            maior = i
        } 
        if (i < menor) {
            menor = i
        }
    }
    console.log(`O maior número é ${maior} e o menor é ${menor}`) 
}
maiorEMenor(arrayOriginal)

// DESAFIOS
// 1
let numJogadorUm = Number(prompt("Digite o número que você pensou"))

console.log("Vamos jogar!")

const jogoAdivinhacao = (numJogadorUm) => {
    let errou = true
    let tentativa = 0
    while (errou) {
        let chute = Number(prompt("Adivinhe em qual número eu pensei"))
        tentativa+= 1
        console.log(`O número chutado foi: ${chute}`)
        if (chute < numJogadorUm) {
            console.log("Errou. O número escolhido é maior")
        } else if (chute > numJogadorUm) {
            console.log("Errou. O número escolhido é menor")
        } else if (chute === numJogadorUm) {
            errou = false
            console.log("Acertou")
            console.log(`O número de tentativas foi ${tentativa}`)
        }
    }
}
jogoAdivinhacao(numJogadorUm)

// 2
function getRandomArbitrary(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

let numeroPC = getRandomArbitrary(0, 10)
console.log("Vamos jogar!")
console.log(numeroPC)
const jogoAdivinhacaoDois = (numJogadorUm) => {
    let errou = true
    let tentativa = 0
    while (errou) {
        let chute = Number(prompt("Adivinhe em qual número eu pensei"))
        tentativa+= 1
        console.log(`O número chutado foi: ${chute}`)
        if (chute < numJogadorUm) {
            console.log("Errou. O número escolhido é maior")
        } else if (chute > numJogadorUm) {
            console.log("Errou. O número escolhido é menor")
        } else if (chute === numJogadorUm) {
            errou = false
            console.log("Acertou")
            console.log(`O número de tentativas foi ${tentativa}`)
        }
    }
}
jogoAdivinhacaoDois(numeroPC)

