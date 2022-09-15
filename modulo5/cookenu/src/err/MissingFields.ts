import { BaseError } from "./BaseError";

export class MissingFields extends BaseError{
    constructor(){
        super("Informe todos os dados solicitados", 404)
    }
}