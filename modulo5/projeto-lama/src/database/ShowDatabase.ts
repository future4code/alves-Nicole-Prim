import { IShowDB, Show } from "../models/Show"
import { BaseDatabase } from "./BaseDatabase"

export class ShowDatabase extends BaseDatabase {
    public static TABLE_SHOWS = "Lama_Shows"
    public static TABLE_TICKETS = "Lama_Tickets"

    public toShowDBModel = (show: Show) => {
        const showDB: IShowDB = {
            id: show.getId(),
            band: show.getBand(),
            starts_at: show.getStartsAt(),
            tickets: show.getTickets()
        }

        return showDB
    }

    public createShow = async (show: Show) => {
        const showDB = this.toShowDBModel(show)

        await BaseDatabase.connection(ShowDatabase.TABLE_SHOWS)
            .insert(showDB)
    }

    public checkDate = async (starts_at: any) =>{
        const result = await BaseDatabase.connection(ShowDatabase.TABLE_SHOWS)
        .select()
        .where({ starts_at })

        return result[0]
    }

}