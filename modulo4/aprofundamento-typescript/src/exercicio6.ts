type Ordenacao = {
    nome: string,
    idade: number,
    data: string
}

const ordenaConsulta = (consulta: Ordenacao[]) => {
    const ordemNomes = consulta.sort(function(a, b) {
        if (a.nome > b.nome) {
            return 1
        } if (a.nome < b.nome) {
            return -1
        }
    })
    return ordemNomes
}

console.log(ordenaConsulta([
    { nome: "João", idade: 23, data: "01/10/2021" },
    { nome: "Pedro", idade: 31, data: "02/07/2021" },
    { nome: "Paula", idade: 26, data: "03/11/2021" },
    { nome: "Márcia", idade: 45, data: "04/05/2021" }
  ]
  ))