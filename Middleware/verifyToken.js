import jwt from 'jsonwebtoken';
import { AppError } from '../utils/AppError.js';
import catchError from './catchError.js';

export const verifyToken = catchError(async (req, res, next) => {
    let { token } = req.headers;
    if (!token) return next(new AppError("Token not provided", 401));

    jwt.verify(token, "iti", (err, decoded) => {
        if (err) return next(new AppError("Invalid token", 401));
        
        req.user = decoded; 
        next();
    });
});