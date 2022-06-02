```function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  // Escreva seu código aqui
  let a = arrayDeNumeros.filter(x => x==numeroEscolhido).length
  if (a > 0) {
    return `O número ${numeroEscolhido} aparece ${a}x`
  } else if (a == 0) {
    return `Número não encontrado`
  }
  
}