import { GeneralError } from '../../common';
import { User } from '../../database/models';
import { IUser } from '../../interfaces';

const findAll = async (): Promise<IUser[]> => {
  try {
    return User.findAll({
      where: {
        isActive: true,
      },
    });
  } catch (err) {
    throw new GeneralError({ message: 'Error find user.' });
  }
};

export default findAll;
