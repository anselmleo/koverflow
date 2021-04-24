import { Request, Response, NextFunction } from 'express';
import winston from 'winston';

export default (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  winston.error(error.message, error);
  res
    .status(500)
    .send({
      status: false,
      message: 'Something failed. Please try again in a few'
    });
};
