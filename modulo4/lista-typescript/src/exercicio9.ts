const anagrama = (palavra: string) => {
    let tamanho = palavra.length
    let resultado = tamanho
    for (let i = 1; i < tamanho; i++) {
        resultado *= i
    }
    return resultado
}

console.log(anagrama("mesa"))