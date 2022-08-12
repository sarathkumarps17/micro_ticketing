import {Request,Response} from 'express'

export interface AuthRequest extends Request{
    body:{email:string,password:string}
}