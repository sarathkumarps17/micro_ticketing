import { Request,Response,NextFunction } from "express";
import { ErrorRequestType, ErrorResponse } from "../types/errorTypes";

export const errorHandler = (
    err:ErrorRequestType,
    req:Request,
    res:Response,
    next:NextFunction) =>{
    const errorResponse:ErrorResponse = {type:err.type,messages:err.serializeError()}
    return res.status(err.statusCode).send({error:errorResponse})
}