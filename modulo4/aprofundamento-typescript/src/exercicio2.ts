type Amostra = {
    numeros: number[],
    obterEstatistica: (numeros: number[]) => {}
}

const amostraDeNumeros: Amostra = {
    numeros: [21, 18, 65, 44, 15, 18],
    obterEstatistica: (numeros) => {
        const numerosOrdenados:number[] = numeros.sort(
            (a, b) => a - b
        )
    
        let soma: number = 0
    
        for (let num of numeros) {
            soma += num
        }
    
        const estatisticas = {
            maior: numerosOrdenados[numeros.length - 1],
            menor: numerosOrdenados[0],
            media: soma / numeros.length
        }
    
        return estatisticas
    }
}




console.log(amostraDeNumeros)
console.log(amostraDeNumeros.obterEstatistica(amostraDeNumeros.numeros))