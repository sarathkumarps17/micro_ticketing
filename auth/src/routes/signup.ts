import { Router,Request,Response } from "express";
import { AuthRequest } from "../types/authTypes";
import {body,validationResult} from 'express-validator'
import { RequestValidationError } from "../errors/validationError";
import { DatabaseError } from "../errors/databaseError";

const router = Router();

router.post('/api/users/signup',[
    body('email').isEmail().withMessage('Email must be valid'),
    body('password').trim().isLength({min:4,max:12}).withMessage('password must be of length between 4 and 12 chars')
],(req:AuthRequest,res:Response)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        throw new RequestValidationError(errors.array())
    }
    const {email,password} = req.body;
    // console.log({email,password});
    // throw new DatabaseError();

    res.status(200).send('sucssuffully signup')

})

export { router as signUpRoute};