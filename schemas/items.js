import Joi from 'joi';

export const ITEM_SCHEMA = {
  name: Joi.string()
    .max(30)
    .required(),
  description: Joi.string()
    .max(100)
    .required()
};

export const create = {
  item: Joi.object(ITEM_SCHEMA).required()
};

export default {
  create
};
