/* 
Exercicios interpretação:
1.
A
Primeiro console: Matheus Nachtergaele
Segundo console: Virginia Cavendish
Terceiro console: canal: "Globo", horario: "14h"

2
A
Primeiro console:
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
Segundo console:
    nome: "Juba”,
	idade: 3, 
	raca: "SRD"
Terceiro console:
    nome: "Jubo”,
	idade: 3, 
	raca: "SRD” 
B
Copia as chaves e valores do objeto que vem a seguir dos …


3 ver 
A
Primeiro console: false
Segundo console: undefined
B 
Imprimiu undefined porque não tem altura definida no objeto que pudesse ser feita a substituição. 

Exercicios escrita:
1 
A
*/
const pessoa = {
nome: "Nicole",
apelidos: ["ni", "nic", "prim"]
}

function dadosPessoa (valor) {
console.log(`Eu sou ${valor.nome}, mas pode me chamar de: ${valor.apelidos}.`)
}

dadosPessoa(pessoa)

// B
const novosApelidos = {
    ...pessoa,
    apelidos: ["cole", "nica", "primprim"]
}

dadosPessoa(novosApelidos)

// 2
// A
const primeiroObjeto = {
    nome: "Paulo",
    idade: 31,
    profissao: "desenvolvedor"
}

const segundoObjeto = {
    nome: "Camila",
    idade: 27,
    profissao: "gerente"
}

// B
function doisObjetos (objetoUm, objetoDois) {
    let arrayExerc = [objetoUm.nome, objetoUm.nome.length, objetoUm.idade, objetoUm.profissao, objetoUm.profissao.length, objetoDois.nome, objetoDois.nome.length, objetoDois.idade, objetoDois.profissao, objetoDois.profissao.length]
    return arrayExerc
}

doisObjetos(primeiroObjeto, segundoObjeto)

// 3
// A 
let carrinho = []

// B
let frutaUm = {
    nome: "Maçã",
    disponibilidade: true
}

let frutaDois = {
    nome: "Uva",
    disponibilidade: true
}

let frutaTres = {
    nome: "Tangerina",
    disponibilidade: true
}

// C
function exercTres (fruta) {
    carrinho.push(fruta)
}

exercTres(frutaUm)
exercTres(frutaDois)
exercTres(frutaTres)

console.log(carrinho)

// Desafio
// 1
let nomeUsuario = prompt("Qual seu nome?")
let idadeUsuario = prompt("Qual sua idade?")
let profissaoUsuario = prompt("Qual sua profissão?")

let objetoUsuario = {
    nome: nomeUsuario,
    idade: idadeUsuario,
    profissao: profissaoUsuario
}

console.log(objetoUsuario)
console.log(typeof(objetoUsuario))

// 2
let filmeUm = {
    anoDeLancamento: 1994,
    nome: "Um sonho de liberdade"
}

let filmeDois = {
    anoDeLancamento: 1994,
    nome: "Forrest Gump"
}

function filme (filmeExUm, filmeExDois){
    let comparAntes = filmeExUm.anoDeLancamento < filmeExDois.anoDeLancamento
    let comparIgual = filmeExUm.anoDeLancamento === filmeExDois.anoDeLancamento
    return `O primeiro filme foi lançado antes do segundo? ${comparAntes} \n O primeiro filme foi lançado no mesmo ano do segundo? ${comparIgual}`
}
console.log(filme(filmeUm, filmeDois))

// 3
function desafioExTres (fruta) {
    let novaDispon = {
        ...frutaUm,
        disponibilidade: !(fruta).disponibilidade
    }
    return novaDispon
}
    
    console.log(desafioExTres(frutaUm))
