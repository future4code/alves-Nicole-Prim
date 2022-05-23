// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    array.sort(function(a, b) {
        return a - b
    })
    return array
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    const pares = array.filter(x => x % 2 === 0)
    return pares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    const pares = array.filter(x => x % 2 === 0)
    const paresDois = []
    for (par of pares) {
        paresDois.push(Math.pow(par, 2))
    }
    return paresDois
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maior = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] > maior) {
            maior = array[i]
        }
    }
    return maior
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let maior = Math.max(num1, num2)
    let menor = Math.min(num1, num2)
    let divisivel = maior % menor === 0
    let diferen = maior - menor
    return { maiorNumero: maior, maiorDivisivelPorMenor: divisivel, diferenca: diferen}
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   let numerosPares = []
   for (let i = 0; numerosPares.length < n; i++) {
    if (i % 2 == 0) {
        numerosPares.push(i)
    }
}
return numerosPares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    frase = `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por`
    for (ator of filme.atores) {        
        if (filme.atores.indexOf(ator) === 0) {
            frase = frase.concat(" " + ator)
        } else if (filme.atores.indexOf(ator) === filme.atores.length-1) {
            frase = frase.concat(", " + ator + ".")
        } else {
            frase = frase.concat(", " + ator)
        }
    }
   return frase
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    pessoa.nome = "ANÔNIMO"
    return pessoa
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    pessoasAutorizadas = []
    for (pessoa of pessoas) {
        if (pessoa.altura >= 1.5 && pessoa.idade > 14 && pessoa.idade < 60) {
            pessoasAutorizadas.push(pessoa)
        }
    }
  return pessoasAutorizadas
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    pessoasNãoAutorizadas = []
    for (pessoa of pessoas) {
        if (pessoa.altura < 1.5 || pessoa.idade <= 14 || pessoa.idade >= 60) {
            pessoasNãoAutorizadas.push(pessoa)
        }
    }
  return pessoasNãoAutorizadas
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    consultasOrder = consultas.sort(function (a, b) {
        if (a.nome > b.nome){
        return 1
        } 
        if (a.nome < b.nome) {
        return -1
        }
        return 0
    })
    return consultasOrder
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
}