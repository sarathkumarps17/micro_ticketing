import { Router,Request,Response } from "express";

const router = Router();

router.get('/api/users/getuser',(req:Request,res:Response)=>{
    res.send("Current user");
})

export { router as getUserRoute};