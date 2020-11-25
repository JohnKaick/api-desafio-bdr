import { User } from '../../database/models';
import { IUser } from '../../interfaces';

const findAll = async (): Promise<IUser[]> => {
  return User.findAll({});
};

export default findAll;
