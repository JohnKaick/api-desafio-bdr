import { Request, Response, NextFunction } from 'express';

import { HttpError } from '../../common';

export default (
  err: Error,
  _request: Request,
  response: Response,
  _: NextFunction,
): Response => {
  if (err instanceof HttpError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  return response.status(500).json({
    status: 'error',
    message: err.message || 'Internal server error',
  });
};
