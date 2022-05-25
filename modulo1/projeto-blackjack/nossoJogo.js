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

console.log("Boas vindas ao jogo de Blackjack!")
const perguntaInicio = confirm("Quer iniciar uma nova rodada?")

if (confirm(perguntaInicio)) {
   cartaUmUsuario = comprarCarta()
   cartaDoisUsuario = comprarCarta()
   cartaUmComputador = comprarCarta()
   cartaDoisComputador = comprarCarta()
   resultadoUsuario = cartaUmUsuario.valor + cartaDoisUsuario.valor 
   resultadoComputador = cartaUmComputador.valor + cartaDoisComputador.valor
   console.log(`Usuário - cartas: ${cartaUmUsuario.texto} ${cartaDoisUsuario.texto} - pontuação ${resultadoUsuario}`)
   console.log(`Computador - cartas: ${cartaUmComputador.texto} ${cartaDoisComputador.texto} - pontuação ${resultadoComputador}`)
   if (resultadoUsuario === resultadoComputador) {
      console.log("Empate!")
   } else if (resultadoUsuario > resultadoComputador && resultadoUsuario < 21) {
      console.log("O usuário ganhou!")
   } else if (resultadoComputador > resultadoUsuario && resultadoComputador < 21) {
      console.log("O computador ganhou!")
   }
} else {
   console.log("O jogo acabou.")
}
