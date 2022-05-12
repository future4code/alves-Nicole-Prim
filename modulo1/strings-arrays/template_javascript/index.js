// exercicio 1 interpretação:
// a. undefined
// b. null
// c. 11
// d. 3
// e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// f. 9

// exercicio 2 interpretação: SUBI NUM ÔNIBUS EM MIRROCOS 27

// exercicio 1 escrita:

const nomeUsuario = prompt("Qual seu nome?")
const emailUsuario = prompt("Qual seu e-mail?")

const fraseConcatenacao = "O e-mail " + emailUsuario + " foi cadastrado com sucesso. Seja bem-vinda(o), " + nomeUsuario + "!"

console.log(fraseConcatenacao)

const fraseTemplateString = `O e-mail ${prompt("Qual seu e-mail?")} foi cadastrado com sucesso. Seja bem-vinda(o), ${prompt("Qual seu nome?")}!`

console.log(fraseTemplateString)

// exercicio 2 escrita:

let comidasPreferidas = ["pizza", "massa", "sushi", "legumes", "churrasco"]

console.log(comidasPreferidas)

console.log("Essas são as minhas comidas preferidas:","\n", comidasPreferidas[0], "\n", comidasPreferidas[1], "\n", comidasPreferidas[2], "\n", comidasPreferidas[3], "\n", comidasPreferidas[4])

let comidaUsuario = prompt("Qual sua comida preferida?")

comidasPreferidas = ["pizza", comidaUsuario, "sushi", "legumes", "churrasco"]

console.log(comidasPreferidas)

// exercicio 3 escrita:

let listaDeTarefas = []

listaDeTarefas[0] = prompt("Cite uma tarefa que você precisa realizar hoje")
listaDeTarefas[1] = prompt("Cite uma tarefa que você precisa realizar hoje")
listaDeTarefas[2] = prompt("Cite uma tarefa que você precisa realizar hoje")

console.log(listaDeTarefas)

let ok = prompt("Qual das tarefas você já realizou hoje? [0], [1] ou [2]?")

listaDeTarefas.splice(ok, 1)

console.log(listaDeTarefas)

// Desafio

let fraseUsuario = prompt("Digite uma frase")
