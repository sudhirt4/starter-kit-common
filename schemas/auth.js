import Joi from 'joi';

export const login = {
  user: Joi.object({
    email: Joi.string()
      .email()
      .max(50)
      .required(),
    password: Joi.required()
  }).required()
};

export default {
  login
};
