
export enum ErrorType{
    validationError = 'validation error',
    serviceError = 'service error',
    databaseError = 'database error',
    pageNotFound = 'page not found'
}
export interface ErrorResponse {
    service?:string
    type:ErrorType;
    messages:string[]
}
export interface ErrorRequestType{
    serializeError():string[];
    statusCode:number
    type:ErrorType
}