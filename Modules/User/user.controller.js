import userModel from "../../Database/Models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import sendEmail from "../../Email/email.js";
import catchError from "../../Middleware/catchError.js";
import { AppError } from "../../utils/AppError.js";


export const signup = catchError(async (req, res) => {
    let user = await userModel.insertMany(req.body);
    sendEmail(req.body.email); 
    user[0].password = undefined;
    res.status(201).json({ message: "Success", data: user });
});

export const verifyAccount = catchError(async (req, res, next) => {
    jwt.verify(req.params.token, "myEmail", async (err, decoded) => {
        if (err) return next(new AppError("Invalid Token", 401));
        
        await userModel.findOneAndUpdate({ email: decoded }, { isConfirmed: true });
        res.status(200).json({ message: "Account Verified! You can login now." });
    });
});


export const signin = catchError(async (req, res, next) => {
    const user = await userModel.findOne({ email: req.body.email });
    if (!user || !bcrypt.compareSync(req.body.password, user.password)) {
        return next(new AppError("Invalid email or password", 401));
    }
    if (!user.isConfirmed) {
        return next(new AppError("Please verify your email first", 401));
    }
    const token = jwt.sign({ _id: user._id, role: user.role }, "iti");
    res.status(200).json({ message: "Welcome", token });
});