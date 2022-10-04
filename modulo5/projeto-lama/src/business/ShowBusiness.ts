import { ShowDatabase } from "../database/ShowDatabase"
import { AuthenticationError } from "../errors/AuthenticationError"
import { AuthorizationError } from "../errors/AuthorizationError"
import { ParamsError } from "../errors/ParamsError"
import { Show } from "../models/Show"
import { USER_ROLES } from "../models/User"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

export class ShowBusiness {
    constructor(
        private showDatabase: ShowDatabase,
        private idGenerator: IdGenerator,
        private authenticator: Authenticator
    ) { }

    public createRecordShow = async (input: any) => {
        const { band, starts_at, token } = input

        const payload = this.authenticator.getTokenPayload(token)

        if (!payload) {
            throw new AuthenticationError();
        }

        if (!band || !starts_at) {
            throw new ParamsError()
        }

        if (typeof band !== "string" || typeof starts_at !== "string" || new Date(starts_at) < new Date("2022-12-05")) {
            throw new ParamsError()
        }

        if (payload.role !== USER_ROLES.ADMIN) {
            throw new AuthorizationError()
        }

        const id = this.idGenerator.generate()

        const show = new Show(
            id,
            band,
            new Date(starts_at)
        )

        const checkShowDate = await this.showDatabase.checkDate(starts_at)

        if (checkShowDate) {
            throw new ParamsError("Já existe um show nessa data")
        }

        await this.showDatabase.createShow(show)

        const response = {
            message: "Show registrado com sucesso!",
        }

        return response

    }

    public getAllShows = async () => {

        const shows = await this.showDatabase.selectAllShows()

        const verifyShows = shows.map((show) => {
            const date = new Date(show.starts_at)

            return new Show(
                show.id,
                show.band,
                date
            )
        })

        for (let show of verifyShows) {
            const showId = show.getId()
            const tickets = await this.showDatabase.getTicketsShow(showId)
            show.setTickets(5000 - tickets)
        }

        const response = {
            verifyShows
        }
        

        return response
    }

}