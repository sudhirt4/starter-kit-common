import Joi from 'joi';

export const login = {
  user: {
    email: Joi.string()
      .email()
      .max(50)
      .required(),
    password: Joi.required()
  },
  test: Joi.array().items({
    x: Joi.string().required()
  })
};

export default {
  login
};
