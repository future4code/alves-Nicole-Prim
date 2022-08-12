//Exercicio 1:

// a)
// const minhaString: string = 55
// Aparece erro na variável com a informação de que um tipo 'number' não pode ser atribuído ao tipo 'string'

// b)
const meuNumero: string | number = 22
// Para que a variável aceite mais de um tipo de valor, devemos separar os tipos por |

// d)
enum favoriteColor {
    VERMELHO = "Vermelho",
    LARANJA = "Laranja",
    AMARELO = "Amarelo",
    VERDE = "Verde",
    AZUL = "Azul",
    VIOLETA = "Violeta"
}

// c)
type Person = {
    name: string,
    age: number,
    favColor: string
}

const person1: Person = {
    name: "Nicole",
    age: 28,
    favColor: favoriteColor.AZUL
}

const person2: Person = {
    name: "Paulo",
    age: 32,
    favColor: favoriteColor.VERDE
}

const person3: Person = {
    name: "Lanai",
    age: 27,
    favColor: favoriteColor.AMARELO
}

