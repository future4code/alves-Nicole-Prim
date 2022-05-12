// exercicio 1 interpretação:
// a. false
// b. false
// c. true
// d. boolean

// exercicio 2 interpretação:
// será impresso no console a concatenação das duas respostas e não a soma, por ex.: se a pessoa responder na primeira pergunta 1 e na segunda 2, o resultado no console vai ser 12. 
// a máquina recebe a resposta como string, não number, por isso não faz a soma, só junta os resultados.

// exercicio 3 interpretação:
// para solucionar poderia manter a parte do prompt e a parte do console.log e alterar a parte apenas da soma para ficar assim:
// const soma = Number(primeiroNumero) + Number(segundoNumero)

// exercicio 1 escrita:

let idadeUsuario = prompt("Qual sua idade?")
let idadeAmigo = prompt("Qual a idade de seu melhor amigo ou melhor amiga?")

console.log("Sua idade é maior do que a do seu melhor amigo?", Number(idadeUsuario) > Number(idadeAmigo))
console.log(Number(idadeUsuario) - Number(idadeAmigo))

// exercicio 2 escrita:

let numeroPar = prompt("Insira um número par")

console.log(Number(numeroPar) % 2)

// com o número par vai resultar sempre o número 0
// com o número impar vai resultar sempre o número 1

// exercicio 3 escrita:

let idadeEmAnos = prompt("informe a sua idade em anos")

console.log(Number(idadeEmAnos) * 12)
console.log(Number(idadeEmAnos) * 365)
console.log(Number(idadeEmAnos) * 24 * 365)

// exercicio 4 escrita:

let primeiroNumero = prompt("Digite o primeiro número")
let segundoNumero = prompt("Digite o segundo número")

console.log("O primeiro numero é maior que o segundo?", Number(primeiroNumero) > Number(segundoNumero))
console.log("O primeiro numero é igual ao segundo?", Number(primeiroNumero)=== Number(segundoNumero))
console.log("O primeiro numero é divisivel pelo segundo?", Number(primeiroNumero) % Number(segundoNumero) === 0)
console.log("O segundo numero é divisivel pelo primeiro?", Number(primeiroNumero) % Number(segundoNumero) === 0)
