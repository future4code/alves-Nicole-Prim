import { PostDatabase } from "../database/PostDatabase"
import { AuthenticationError } from "../errors/AuthenticationError"
import { ParamsError } from "../errors/ParamsError"
import { Post } from "../models/Post"
import { Authenticator } from "../services/Authenticator"
import { IdGenerator } from "../services/IdGenerator"

export class PostBusiness {
    constructor(
        private postDatabase: PostDatabase,
        private idGenerator: IdGenerator,
        private authenticator: Authenticator
    ) {}

    public createPost = async (input:any) => {
        const { token, content } = input

        if (!content) {
            throw new ParamsError()
        }
        if (content.length < 5) {
            throw new Error("O conteúdo do post deve conter pelo menos cinco caracteres")
        }

        if (!token) {
            throw new AuthenticationError();
        }

        const id = this.idGenerator.generate()

        const payload = this.authenticator.getTokenPayload(token)

        if(!payload) {
            throw new AuthenticationError();
        }

        const post = new Post(
          id,
          content,
          payload.id,
        )

        await this.postDatabase.createPost(post)

        const response = {
            message: "Postagem realizada com sucesso!",
        }

        return response
    }

}