enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

type Filmes = {
    nome: string,
    ano: number,
    genero: GENERO,
    pontuacao?: number
}

const duna: Filmes = {
    nome: "Duna",
    ano: 2021,
    genero: GENERO.ACAO,
    pontuacao: 74
}

const umSonhoDeLiberdade: Filmes = {
    nome: "Um Sonho de Liberdade",
    ano: 1994,
    genero: GENERO.DRAMA,
}

console.log(duna)
console.log(umSonhoDeLiberdade)