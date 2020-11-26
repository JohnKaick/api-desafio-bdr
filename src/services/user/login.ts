import bcrypt from 'bcrypt';
import { BadRequest } from '../../common';
import { User } from '../../database/models';
import { IUser } from '../../interfaces';
import generateToken from './generateToken';

const login = async (data: IUser): Promise<string> => {
  const user = await User.findOne({
    where: {
      email: data.email,
    },
  });

  if (user?.email !== data.email)
    throw new BadRequest({
      message: 'Email not registered.',
    });

  const password = user?.password || '';
  if (!(await bcrypt.compare(data.password, password)))
    throw new BadRequest({
      message: 'Wrong email or password.',
    });

  if (!user?.isActive)
    throw new BadRequest({
      message: 'Your account is locked.',
    });

  return generateToken(data);
};

export default login;
