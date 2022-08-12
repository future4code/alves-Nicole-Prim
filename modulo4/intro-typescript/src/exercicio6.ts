const operations = (valor1: number, valor2: number): number | string => {
    const soma: number = valor1 + valor2
    const sub: number = valor1 - valor2
    const mult: number = valor1 * valor2
    let comp: number = 0
    if(valor1 > valor2) {
        comp = valor1
    } else {
        comp = valor2
    }
    return `soma: ${soma}, subtração: ${sub}, multiplicação: ${mult}, maior número: ${comp}`
}

console.log(operations(2, 5))