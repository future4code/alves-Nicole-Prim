export type Cliente = {
    name: string,
    cpf: string,
    dateNasc: string,
    saldo: number,
    extrato: Extrato[] | []
}

export type Extrato = {
    value: number,
    description: string,
    date: string
}

export let accounts: Cliente[] =[ 
    {
        name: "Theodoro",
        cpf: "111111111-11",
        dateNasc: "21/11/2000",
        saldo: 300,
        extrato:[
            {
                value:100,
                description:"agro baito",
                date:"02/08/2022"
            }
        ]
    },
    {
        name: "Milka",
        cpf: "222222222-11",
        dateNasc: "15/09/1990",
        saldo: 400,
        extrato:[
            {
                value:200,
                description:"Roupas",
                date:"18/01/2022"
            }
        ]
       
    },
    {
        name: "Oreo",
        cpf: "333.333.333-11",
        dateNasc: "13/05/1994",
        saldo: 500,
        extrato:[
            {
                value: 300,
                description:"Pagode",
                date:"20/05/2022"
            }
        ]
    }

]