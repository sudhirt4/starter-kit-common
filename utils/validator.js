import * as Joi from 'joi';
import JoiValidationUtils from './joiValidation';

export function validate(data, schema, options = {}) {
  options.abortEarly = false;

  let { error, value } = Joi.validate(data, schema, options);
  if (error) {
    throw error;
  }

  return value;
}

export function getValidationErrors(data, schema, options = {}) {
  try {
    validate(data, schema, options);
  } catch (err) {
    return JoiValidationUtils.normalizeErrors(err);
  }

  return {};
}

export default {
  validate,
  getValidationErrors
};
