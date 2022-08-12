import { ErrorType } from "../types/errorTypes";
import { CustomError } from "./customError";

export class DatabaseError extends CustomError{
    constructor(){
        super();
    }
    get type(){
        return ErrorType.databaseError
    }
    get statusCode(){
        return 500
    }
    serializeError =():string[]=>{
        return ['database error']
    }
}