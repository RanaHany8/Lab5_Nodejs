import Joi from "joi";
export const signupSchema = Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    password: Joi.string().pattern(/^[A-Z][a-z0-9]{3,8}$/).required(),
    age: Joi.number().min(18).max(60)
});

export const signinSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
});