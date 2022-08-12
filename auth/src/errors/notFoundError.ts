import { ErrorType } from "../types/errorTypes";
import { CustomError } from "./customError";
export class NotFoundError extends CustomError{
    constructor(public route:string){
        super();
        this.route = route
    }
    get statusCode(){
        return 404
    }
    serializeError = ():string[]=>{
        return [`${this.route} route not found`]
    }
    get type(){
        return ErrorType.pageNotFound
    }
}