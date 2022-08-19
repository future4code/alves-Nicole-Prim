import { validate } from 'gerador-validador-cpf'

function cpf(dados: string) {
    const verifica = validate(dados)

    return verifica
}

console.log(cpf('522.858.988-98'));
