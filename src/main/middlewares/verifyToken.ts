import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { Unauthorized } from '../../common';

const verifyToken = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  const auth = req.headers.authorization;

  if (!auth) throw new Unauthorized({ message: 'No token provided!' });

  const parts = auth.split(' ');

  if (parts[0] !== 'Bearer')
    throw new Unauthorized({ message: 'Token invalid!' });

  try {
    const decoded = <any>jwt.verify(parts[1], process.env.JWT_SECRET || 'jwt');
    res.locals.userId = decoded.userId;
    res.locals.roles = decoded.roles;
    if (!res.locals.userId)
      throw new Unauthorized({ message: 'Token invalid!' });
    next();
  } catch (err) {
    throw new Unauthorized({ message: 'Unauthorized!' });
  }
};

export default verifyToken;
