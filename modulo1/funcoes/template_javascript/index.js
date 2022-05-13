// exercicio 1 interpretação:
// a: 
// 10 
// 50
// b:
// não apareceria nada no console, pois é a função console.log que determina o que vai aparecer no console

// exercicio 2 interpretação:
// a:
// a função vai fazer com que o texto fique em letras minúsculas e verifique com true ou false se existe os caracteres de "cenoura"
// b:
// true
// true
// true

// exercicio 1 escrita:
// a:
function infos() {
        console.log("Eu sou Nicole, tenho 27 anos, moro em Porto Belo/SC e sou estudante.")    
}

// b:
function infosPessoa(nome, idade, endereço, profissão) {
    console.log("Eu sou " + nome + ", tenho " + idade + " anos, moro em " + endereço + " e sou " + profissão)
    return ("Eu sou " + nome + ", tenho " + idade + " anos, moro em " + endereço + "e sou" + profissão)
}

const nome = prompt("Digite seu nome")
let idade = Number(prompt("Digite sua idade"))
let endereço = prompt("Digite seu endereço")
let profissão = prompt("Digite sua profissão")
infosPessoa(nome, idade, endereço, profissão)

// exercicio 2 escrita:
// a:
function exercDois(num1, num2) {
    let letraA = num1 + num2
    return letraA
}

console.log(exercDois(2, 4))

// b:
function compar(numer1, numer2) {
    let letraB = numer1 >= numer2
    return letraB
}

console.log(compar(8, 2))

// c:
function par(nUm){
    let letraC = nUm %2 == 0
    return letraC
}

console.log(par(4))

// d:
function letraD(texto) {
    const caracteres = texto.length
    const maiusc = texto.toUpperCase()
    console.log(`número caracteres: ${caracteres} maiúscula: ${maiusc}`)
}
letraD("Esse texto é para testar")

// exercicio 3 escrita:
let soma = (numeroUm, numeroDois) => {
    return numeroUm + numeroDois
}

let subtracao = (numeroUm, numeroDois) => {
    return numeroUm - numeroDois
}

let multiplicacao = (numeroUm, numeroDois) => {
    return numeroUm * numeroDois
}

let divisao = (numeroUm, numeroDois) => {
    return numeroUm / numeroDois
}

let numeroUm = +prompt("Digite o primeiro numero")
let numeroDois = +prompt("Digite o segundo numero")

console.log(soma(numeroUm, numeroDois))
console.log(subtracao(numeroUm, numeroDois))
console.log(multiplicacao(numeroUm, numeroDois))
console.log(divisao(numeroUm, numeroDois))
