import { param } from 'express-validator';

export const validateMongoId = (paramName) => [
  param(paramName)
    .trim()
    .notEmpty()
    .withMessage('missing params')
    .isMongoId()
    .withMessage('Invalid Id format'),
];
