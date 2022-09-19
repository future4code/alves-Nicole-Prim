import UserDatabase from "../database/UserDatabase"
import { User, USER_ROLES } from "../model/User"
import { Authenticator, ITokenPayload } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

export default class UserBusiness {
    public signup = async (input: any) => {
        const name = input.name
        const email = input.email
        const password = input.password

        if (!name || typeof name !== "string") {
            throw new Error("Parâmetro 'name' inválido")
        }

        if (name.length < 3) {
            throw new Error("O parâmetro 'name' deve possuir pelo menos 3 caracteres")
        }

        if (!email || typeof email !== "string") {
            throw new Error("Parâmetro 'email' inválido")
        }

        if (!email.includes('@')) {
            throw new Error("Email inválido")
        }

        if (!password || typeof password !== "string") {
            throw new Error("Parâmetro 'password' inválido")
        }

        if (name.length < 6) {
            throw new Error("O parâmetro 'name' deve possuir pelo menos 6 caracteres")
        }

        const idGenerator = new IdGenerator()
        const id = idGenerator.generate()

        const hashManager = new HashManager()
        const hashPassword = await hashManager.hash(password)

        const user = new User(
            id,
            name,
            email,
            hashPassword
        )

        const userDatabase = new UserDatabase()

        const userDB = await userDatabase.getUserByEmail(email)

        if (userDB) {
            throw new Error("O email já foi cadastrado")
        }

        await userDatabase.createUser(user)

        const payload: ITokenPayload = {
            id: user.getId(),
            role: user.getRole()
        }

        const authenticator = new Authenticator()
        const token = authenticator.generateToken(payload)

        const response = {
            token
        }

        return response
    }

    public login = async (input: any) => {
            const email = input.email
            const password = input.password

            if (!email || !password) {
                throw new Error("Parâmetro 'email' e/ou 'password' inválidos")
            }

            if (typeof email !== "string" || typeof password !== "string") {
                throw new Error("Parâmetro 'email' e/ou 'password' inválido")
            }

            const userData = new UserDatabase()

            const userDB = await userData.getUserByEmail(email)

            if (!userDB) {
                throw new Error("Email ou senha inválidos")
            }

            const hashManager = new HashManager()
            const correctPassword = await hashManager.compare(password, userDB.password)

            if (!correctPassword) {
                throw new Error("Email ou senha inválidos")
            }

            const payload: ITokenPayload = {
                id: userDB.id,
                role: userDB.role
            }

            const token = new Authenticator().generateToken(payload)

            const response = {
                token
            }

            return response
        }

        public getUsers = async (input: any) => {
            const tokenUser = input.token

              if (!tokenUser) {
                throw new Error("Token inválido")
            }

            const userData = new UserDatabase()

            const find = await userData.selectAllUsers()

            const response = {
                find
            }

            return response
        }
}