import express from 'express';
import { signup, signin, verifyAccount } from './user.controller.js';
import { signupSchema, signinSchema } from "../../Validation/user.validation.js";
import { validation } from "../../Middleware/validation.js";

const userRouter = express.Router(); 


userRouter.get("/verify/:token", verifyAccount);

userRouter.post("/signup", validation(signupSchema), signup); 


userRouter.post("/signin", validation(signinSchema), signin);

export default userRouter; 