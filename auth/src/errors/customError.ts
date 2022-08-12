import { ErrorType } from "../types/errorTypes"

export abstract class CustomError extends Error{;
    constructor(){
        super()
    }
    abstract type: ErrorType
    abstract statusCode:number
    abstract serializeError():string[]
}