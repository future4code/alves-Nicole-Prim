const fs = require('fs')

// Exercicio 3
const red = '\u001b[31m';
const blue = '\u001b[34m';

const teste = fs.readFileSync(__dirname + "/save.json")
const tarefas = JSON.parse(teste)

const adicionaTarefas = (tarefa) => {
    tarefas.push(tarefa)
    const tarefasString = JSON.stringify(tarefas)
    fs.writeFileSync(__dirname + "/save.json", tarefasString)
    return(`Tarefa adicionada com sucesso!`)
}

console.log(blue + adicionaTarefas([process.argv[2]]), red + "Tarefas:", tarefas)
