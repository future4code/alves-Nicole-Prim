type Pessoas = {
    name: string,
    email: string,
    role: string
}

enum ADMIN {
    USER = "user",
    ADMIN = "admin"
}

const pessoas: Pessoas[] = [
    { name: "Rogério", email: "roger@email.com", role: ADMIN.USER },
    { name: "Ademir", email: "ademir@email.com", role: ADMIN.ADMIN },
    { name: "Aline", email: "aline@email.com", role: ADMIN.USER },
    { name: "Jéssica", email: "jessica@email.com", role: ADMIN.USER },
    { name: "Adilson", email: "adilson@email.com", role: ADMIN.USER },
    { name: "Carina", email: "carina@email.com", role: ADMIN.ADMIN }
]

function filtraAdmin(pessoas: Pessoas[]): string[] {
    return pessoas.filter((pessoa) => {
        return pessoa.role === ADMIN.ADMIN
    }).map((usuario) => {
        return usuario.email
    })
}

console.log(filtraAdmin(pessoas))