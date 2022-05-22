/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

let cartasUsuario = []
let cartasComputador = []

if (confirm(`Seja bem vinda(o) ao jogo de Blackjack! \n Quer iniciar uma nova rodada?`)) {
   cartasUsuario.push(comprarCarta())
   cartasUsuario.push(comprarCarta())
   cartasComputador.push(comprarCarta())
   cartasComputador.push(comprarCarta())
   if (cartasUsuario[0] && cartasUsuario[1] === `A`){
      cartasUsuario[0] = comprarCarta()
      cartasUsuario[1] = comprarCarta()
   } else if (cartasComputador[0] && cartasComputador[1] === `A`) {
      cartasComputador[0] = comprarCarta()
      cartasComputador[1] = comprarCarta()
   }
   continuarJogo = true 
   
   while (continuarJogo) {
      mensagem = `Suas cartas são: `
      somaDasCartas = 0

      for (carta of cartasUsuario) {
         mensagem = mensagem.concat(carta.texto)
         somaDasCartas += carta.valor
      }
      
      if (somaDasCartas <= 21) {
         continuarJogo = confirm(`${mensagem}. A carta revelada do computador é ${cartasComputador[0].texto} \n Deseja comprar mais uma carta?`)
         if(continuarJogo == false && somaDasCartas > (cartasComputador[0].valor + cartasComputador[1].valor)){
            alert (`${mensagem}. Sua pontuação é ${somaDasCartas}. \n As cartas do computador são ${cartasComputador[0].texto} ${cartasComputador[1].texto}. A pontuação do computador é ${cartasComputador[0].valor + cartasComputador[1].valor} \n O usuário ganhou!`)
         } else if (continuarJogo == false && somaDasCartas < (cartasComputador[0].valor + cartasComputador[1].valor)) {
            alert (`${mensagem}. Sua pontuação é ${somaDasCartas}. \n As cartas do computador são ${cartasComputador[0].texto} ${cartasComputador[1].texto}. A pontuação do computador é ${cartasComputador[0].valor + cartasComputador[1].valor} \n O usuário ganhou!`)
         }      
      } else if (somaDasCartas > 21) {
         alert (`Suas cartas são ${mensagem}. Sua pontuação é ${somaDasCartas}. \n As cartas do computador são ${cartasComputador[0].texto} ${cartasComputador[1].texto}. A pontuação do computador é ${cartasComputador[0].valor + cartasComputador[1].valor} \n O computador ganhou!`)
         continuarJogo = false
      }

      if (continuarJogo) {
         cartasUsuario.push(comprarCarta())
      }
   }   
   

 } else {
  alert `O jogo acabou`
 }