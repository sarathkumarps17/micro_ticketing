import express,{ Express,Request,Response } from "express";
import 'express-async-errors'
import { json } from "body-parser";
import cors from 'cors'
import { signInRoute } from "./routes/signin";
import { signUpRoute } from "./routes/signup";
import { getUserRoute } from "./routes/get_user";
import { signOutRoute } from "./routes/signout";
import { errorHandler } from "./middlewares/errorHandler";
import { NotFoundError } from "./errors/notFoundError";


const PORT = 3000
const app = express();
app.use(json());
app.use(cors());

app.use(signUpRoute);
app.use(signInRoute);
app.use(getUserRoute);
app.use(signOutRoute);
app.all('*',async (req:Request)=> {
    throw new NotFoundError(req.url)})

app.use(errorHandler);

app.listen(PORT,()=>console.log(`-- Auth service running at port ${PORT}`));
