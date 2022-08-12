import { ValidationError } from "express-validator";
import { ErrorType } from "../types/errorTypes";
import { CustomError } from "./customError";

export class RequestValidationError extends CustomError {
    
    constructor(private messages:ValidationError[]){
        super();
        this.messages= messages
    }
    get type(){
        return ErrorType.validationError
    }
    serializeError = ():string[]=>{
        let messages = this.messages.map(err=>{
            if(err.msg) return err.msg
            else return ''
        });
        return messages
    }
    get statusCode(){
        return 400
    }
}