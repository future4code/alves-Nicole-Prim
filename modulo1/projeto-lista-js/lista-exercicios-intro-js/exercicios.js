// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  let altura = Number(prompt("Digite a altura do retângulo"))
  let largura = Number(prompt("Digite a largura do retângulo"))
  let calculo = altura * largura

  console.log(calculo)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  let anoAtual = +prompt("Digite o ano atual")
  let anoNascimento = +prompt("Digite o ano do seu nascimento")
  let idade = anoAtual - anoNascimento

  console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  let IMC = peso / (altura * altura)

  return IMC
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  let nomeUsuario = prompt("Digite seu nome")
  let idadeUsuario = +prompt("Digite sua idade")
  let emailUsuario = prompt("Digite seu e-mail")

  console.log(`Meu nome é ${nomeUsuario}, tenho ${idadeUsuario} anos, e o meu email é ${emailUsuario}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  let corUm = prompt("Digite uma cor favorita")
  let corDois = prompt("Digite outra cor favorita")
  let corTres = prompt("Digite outra cor favorita")
  let coresFavoritas = [corUm, corDois, corTres]

  console.log(coresFavoritas)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
    return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return custo / valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  let stringVerificarUm = string1.length
  let stringVerificarDois = string2.length
  return stringVerificarUm === stringVerificarDois
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  let ultimo = array[array.length-1]
  return ultimo
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  let ultimo = array[array.length-1]
  array[array.length-1] = array[0]
  array[0] = ultimo
  
  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  let comparar = string1.toUpperCase() === string2.toUpperCase() 
  return comparar
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  let anoAtual = prompt("Qual o ano atual?")
  const anoNascimento = prompt("Qual o ano de seu nascimento")
  let emissaoRG = prompt("Em qual ano sua carteira de identidade foi emitida?")
  let idade = anoAtual - anoNascimento
  let tempoEmissao = anoAtual - emissaoRG
  let renovacao =
  (idade <= 20 && tempoEmissao >= 5) ||
  (idade >= 21 && idade <= 50 && tempoEmissao >= 10) ||
  (idade > 50 && tempoEmissao >= 15)
  console.log(renovacao)
}

function checaRenovacaoRGIf() {
  // implemente sua lógica aqui
  let anoAtual = prompt("Qual o ano atual?")
  const anoNascimento = prompt("Qual o ano de seu nascimento")
  let emissaoRG = prompt("Em qual ano sua carteira de identidade foi emitida?")
  let idade = anoAtual - anoNascimento
  let tempoEmissao = anoAtual - emissaoRG
  let renovacao = false
  if (idade <= 20 && tempoEmissao >= 5) {
    renovacao = true
  } else if (idade >= 21 && idade <= 50 && tempoEmissao >= 10) {
    renovacao = true
  } else if (idade > 50 && tempoEmissao >= 15) {
    renovacao = true
  }
  console.log(renovacao)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  let multiplo400 = (ano % 400 == 0) 
  let multiplo4 = (ano % 4 == 0 && ano % 100 !== 0)
  return multiplo400 || multiplo4
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  let mais18 = prompt("Você mais tem de 18 anos?")
  let possuiEnsinoMedio = prompt("Você possui ensino médio completo?")
  let disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")

  console.log(mais18 == "sim" && possuiEnsinoMedio == "sim" && disponibilidade == "sim")
}