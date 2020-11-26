import { Request, Response, NextFunction } from 'express';
import { Unauthorized } from '../../common';

const rolesAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  const { roles } = res.locals;
  if (roles !== 'admin') throw new Unauthorized({ message: 'Unauthorized!' });
  next();
};

export default rolesAdmin;
