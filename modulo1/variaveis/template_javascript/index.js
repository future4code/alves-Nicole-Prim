// exercicio 1: será impresso no console em uma linha o número 10 e na outra linha os números 10 5
// exercicio 2: será impresso no console os números 10 10 10
// exercicio 3: a variavel let p deveria se chamar horasTrabalhadas e a variavel let t deveria se chamar valorDia

let nome
let idade

console.log(typeof nome)
console.log(typeof idade)

// foi impresso como undefined porque não tem valor

nome = prompt("Qual é seu nome?")
idade = prompt("Qual sua idade?")

console.log(typeof nome)
console.log(typeof idade)

// notei que agora as duas variavies ficaram como string, o que acontece porque tudo o que o usuário digitar será considerado string

console.log("Olá", nome, "você tem", idade, "anos")


const perguntaUm = "Já tomou água hoje?"
const perguntaDois = "Hoje tem sol?"
const perguntaTres = "Você está de bom-humor?"

let respostaUm = prompt(perguntaUm) // pesquisando, vi que poderia usar o confirm no lugar do prompt
let respostaDois = prompt(perguntaDois)
let respostaTres = prompt(perguntaTres)

console.log(perguntaUm, respostaUm)
console.log(perguntaDois, respostaDois)
console.log(perguntaTres, respostaTres)

let copoUm = "coca-cola"
let copoDois = "guarana"
let copoTres

console.log("o conteúdo do primeiro copo é", copoUm)
console.log("o conteúdo do segundo copo é", copoDois)

copoTres = copoUm
copoUm = copoDois
copoDois = copoTres

console.log("o novo conteúdo do primeiro copo é", copoUm)
console.log("o novo conteúdo do segundo copo é", copoDois)

let primeiroNumero = prompt("Qual o ano em que estamos?")
let segundoNumero = prompt("Qual o ano de seu nascimento?")

console.log(primeiroNumero + segundoNumero)
console.log(primeiroNumero * segundoNumero)