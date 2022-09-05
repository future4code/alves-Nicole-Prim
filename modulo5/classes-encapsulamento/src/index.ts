// Ex 1
// a) Construtor serve basicamente como uma função para inicialização de uma classe, que é chamada no momento em que os objetos desta classe são criados. Para chamá-lo usamos a keyword 'new'.
// b) Rodei sem o Transaction porque ele ainda não foi declarado. A mensagem foi impressa uma vez.
// c) Através da keyword 'this'.
class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];

    constructor(cpf: string, name: string, age: number,) {
        console.log("Chamando o construtor da classe UserAccount")
        this.cpf = cpf;
        this.name = name;
        this.age = age;
    }
    public getCpf() {
        return this.cpf
    }

    public getName() {
        return this.name
    }

    public getAge() {
        return this.age
    }

    public getBalance() {
        return this.balance
    }

    public getTransactions() {
        return this.transactions
    }
}

const user = new UserAccount('123.456.789-10', 'Nicole', 28)

// Ex 2
class Transaction {
    private date: string;
    private value: number;
    private description: string;

    constructor(date: string, value: number, description: string) {
        this.date = date
        this.value = value
        this.description = description
    }
    public getDate() {
        return this.date
    }

    public getValue() {
        return this.value
    }

    public getDescription() {
        return this.description
    }
}

const transactionteste = new Transaction('05/09/22', 3000, 'descrição')
console.log(transactionteste)

// Ex 3
export class Bank {
    private accounts: UserAccount[]

    constructor(accounts: UserAccount[]) {
        this.accounts = accounts
    }

    public getAccounts(): UserAccount[] {
        return this.accounts
    }
}