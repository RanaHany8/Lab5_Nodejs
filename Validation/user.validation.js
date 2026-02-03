import Joi from "joi";


export const signupSchema = Joi.object({
    name: Joi.string().min(3).max(20).required(),
    email: Joi.string().email().required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
    age: Joi.number().min(18).max(80)
});


export const signinSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
});


export const noteSchema = Joi.object({
    title: Joi.string().min(3).max(100).required(),
    content: Joi.string().min(3).max(1000).required()
});