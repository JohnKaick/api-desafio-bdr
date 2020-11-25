import { User } from '../../database/models';
import { IUser } from '../../interfaces';

const create = async (data: IUser): Promise<IUser> => {
  return User.create(data);
};

export default create;
