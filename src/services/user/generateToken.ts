import jwt from 'jsonwebtoken';
import { IUser } from '../../interfaces';
import { GeneralError } from '../../common';

const generateToken = async (data: IUser): Promise<string> => {
  // Information encrypted in the token
  const tokenData = {
    userId: data.id,
    roles: data.roles,
  };

  try {
    return jwt.sign(tokenData, process.env.JWT_SECRET || 'jwt');
  } catch (err) {
    throw new GeneralError({ message: `Error: ${err}` });
  }
};

export default generateToken;
