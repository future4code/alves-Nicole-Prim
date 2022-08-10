function curso(idade: number, em: boolean, horas: number, periodo: string): boolean {
    if (idade >= 18 && em === true && horas >= 40 && periodo === "integral") {
        return true
    } if (idade >= 18 && em === true && horas >= 20 && periodo === "noturno"){
        return true
    } else {
        return false
    }
}

console.log(curso(18, true, 30, "integral"))