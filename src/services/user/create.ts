import { Op } from 'sequelize';
import bcrypt from 'bcrypt';
import { BadRequest, GeneralError } from '../../common';
import { User } from '../../database/models';
import { IUser } from '../../interfaces';
import generateToken from './generateToken';

const create = async (data: IUser): Promise<string> => {
  const salt = await bcrypt.genSalt(10);

  const userExist = await User.findOne({
    where: {
      [Op.or]: [{ name: data.name }, { email: data.email }],
    },
  });

  if (userExist?.name === data.name)
    throw new BadRequest({
      message: 'Existing name, please enter another name',
    });

  if (userExist?.email === data.email)
    throw new BadRequest({
      message: 'Existing email, please enter another email',
    });

  if (data.password) data.password = await bcrypt.hash(data.password, salt);

  try {
    const user = await User.create(data);
    data.id = user.id;
  } catch (err) {
    throw new GeneralError({ message: err.message });
  }

  return generateToken(data);
};

export default create;
