```function calculaNota(ex, p1, p2) {
  // Escreva seu código aqui
  p1 = p1 * 2 
  p2 = p2 * 3 
  ex = ex * 1 
  media = p1 + p2 + ex
  mediaUm = media / 6 
  if (mediaUm >= 9) {
    return `A`
  } else if (mediaUm < 9 && mediaUm >= 7.5) {
    return `B`
  } else if (mediaUm < 7.5 && mediaUm >= 6) {
    return `C`
  } else if (mediaUm < 6) {
    return `D`
  }
}