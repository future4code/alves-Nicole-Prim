// Exercicio 1
const red = '\u001b[31m';
const blue = '\u001b[34m';
// a) através do process.argv[]

//console.log("Olá,", process.argv[2], "! Você tem", process.argv[3], "anos.")

const nome = process.argv[2]
const idadeUser = Number(process.argv[3])
const idade = Number(process.argv[3]) + 7

const verifica = (nome, idadeUser) => {
    if (nome && idadeUser) {
       return console.log(blue + `Olá, ${nome}!`, red + `Você tem ${idadeUser} anos. Em sete anos você terá ${idade}`)
    } else {
        return "Confira se você enviou todos os parâmetros"
    }
}

verifica(nome, idadeUser)