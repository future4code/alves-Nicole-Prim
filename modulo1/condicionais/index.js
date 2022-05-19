// exercicios interpretação:

// 1
// A
// O código vai testar se o número é par, porque todos os números pares dividindo por 2, sobra 0
// B
// Para os números pares
// C
// Para os números ímpares

// 2
// A
// Serve para identificar e precificar as frutas.
// B
// O preço da fruta Maçã é R$2.25
// C
// O preço da fruta Pêra é R$5

// 3 
// A
// A primeira linha está pedindo para o usuário digitar um número.
// B
// Se o usuário digitasse 10, imprimiria a mensagem "Esse número passou no teste"
// Se o usuário digitasse -10, não imprimiria nada, porque a mensagem não foi definida
// C
// Haverá erro porque o let mensagem ficou "perdido" dentro do bloco, não existe um comando dentro do escopo para dizer quando ela deve aparecer, "chamando" ela
// O console.log está fora do if e a variável foi declarada dentro do bloco do if. O console.log deveria ser dentro da condição

// exercicios de escrita:
// 1
// A
let idadeUsuario = Number(prompt("Digita a sua idade em números"))

// B
// ok

// C
if (idadeUsuario >= 18) {
    console.log("Você pode dirigir")
} else {
    console.log("Você não pode dirigir")
}

// 2
let turnoEstudo = prompt("Em qual turno do dia você estuda? Digite M para Matutino, V para Vespertino e N para Noturno").toUpperCase()

if (turnoEstudo === "M") {
    console.log("Bom Dia!")
} else if (turnoEstudo === "V") {
    console.log("Boa Tarde!")
} else if (turnoEstudo === "N") {
    console.log("Boa Noite!")
}

// 3
switch (turnoEstudo) {
    case 'M':
    console.log("Bom Dia!")
    break
    case 'V':
    console.log("Boa Tarde!")
    break
    case 'N':
    console.log("Boa Noite!")
}

// 4
let generoFilme = prompt("Qual o genero do filme que vocês vão assistir?").toLowerCase()
let precoFilme = Number(prompt("Qual o preço do ingresso? Digite em números apenas"))
let condicaoFilmeUm = (generoFilme === "fantasia") && (precoFilme < 15)

if (condicaoFilmeUm) {
    console.log("Bom filme!")
} else {
    console.log("Escolha outro filme :(")
} 

// DESAFIOS
// 1
if (condicaoFilmeUm) {
    let lanchinho = prompt("Qual lanchinho você vai comprar?")
    console.log("Bom filme!")
    console.log(`Aproveite o seu ${lanchinho}`)
} else {
    console.log("Escolha outro filme :(")
}

// 2
let nomeCliente = prompt("Digite seu nome completo")
let tipoDeJogo = prompt("Qual o tipo de jogo você quer assistir? IN para internacional e DO para doméstico").toUpperCase()
let etapaDoJogo = prompt("Qual a etapa do jogo? SF para semi-final, DT para decisão de terceiro lugar e FI para final").toUpperCase()
let categoria = Number(prompt("Qual categoria? Digite 1, 2, 3 ou 4"))
let quantidade = Number(prompt("Quantos ingressos você quer comprar? Digite em números"))

const calculaValor = (etapaDoJogo, categoria) => {
    let valor = 0
    if (etapaDoJogo === 'SF'){
        switch (categoria) {
            case 1:
                valor = 1320
                break
            case 2:
                valor = 880
                break
            case 3:
                valor = 550
                break
            case 4:
                valor = 220
                break
        }
       
    } else if (etapaDoJogo === 'DT') {
        switch (categoria) {
            case 1:
                valor = 660
                break
            case 2:
                valor = 440
                break
            case 3:
                valor = 330
                break
            case 4:
                valor = 170
                break
        }
    } else if (etapaDoJogo === 'FI') {
        switch (categoria) {
            case 1:
                valor = 1980
                break
            case 2:
                valor = 1320
                break
            case 3:
                valor = 880
                break
            case 4:
                valor = 330
                break
        }
    }
    return valor
}

let nomeDaEtapa = (etapaDoJogo) => {
    switch (etapaDoJogo) {
        case 'SF':
            return 'Semifinal'
        case 'DT':
            return 'Decisão de 3 lugar'
        case 'FI':
            return 'Final'
    }
}

if (tipoDeJogo === 'DO') {
    console.log(`---Dados da compra--- \n 
        Nome do cliente: ${nomeCliente} \n
        Tipo do jogo: Doméstico \n
        Etapa do jogo:  ${nomeDaEtapa(etapaDoJogo)} \n 
        Categoria: ${categoria} \n
        Quantidade de Ingressos:  ${quantidade} \n
        ---Valores--- \n
        Valor do ingresso: ${calculaValor(etapaDoJogo, categoria)} \n
        Valor total: ${quantidade * calculaValor(etapaDoJogo, categoria)}`)
} else if (tipoDeJogo === 'IN') {
    console.log(`---Dados da compra--- \n 
        Nome do cliente: ${nomeCliente} \n
        Tipo do jogo: Internacional \n
        Etapa do jogo:  ${nomeDaEtapa(etapaDoJogo)} \n 
        Categoria: ${categoria} \n
        Quantidade de Ingressos:  ${quantidade} \n
        ---Valores--- \n
        Valor do ingresso: ${((calculaValor(etapaDoJogo, categoria)) * 4.10).toFixed(2)} \n
        Valor total: ${((quantidade * calculaValor(etapaDoJogo, categoria)) * 4.10).toFixed(2)}`)
}

