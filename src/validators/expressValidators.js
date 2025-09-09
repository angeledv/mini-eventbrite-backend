import { param } from 'express-validator';

export const validateMongoIdParam = (name) => [
  param(name).isMongoId().withMessage(`${name} must be a valid Mongo ObjectId`)
];