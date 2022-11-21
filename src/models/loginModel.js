import joi from "joi";

export const loginSchema = joi.object({
    email: joi.string().email(),
    password: joi.string().required()
});
