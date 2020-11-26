import bcrypt from 'bcrypt';
import { BadRequest, GeneralError } from '../../common';
import { User } from '../../database/models';
import { IUser } from '../../interfaces';

const update = async (id: number, data: IUser): Promise<string> => {
  const userExist = await User.findOne({
    where: {
      id,
    },
  });

  if (data?.email)
    if (userExist?.email !== data.email)
      throw new BadRequest({
        message: 'Change email is not allowed',
      });

  if (data?.password) {
    const salt = await bcrypt.genSalt(10);
    data.password = await bcrypt.hash(data.password, salt);
  }

  try {
    await User.update(data, {
      where: {
        id,
      },
    });
  } catch (err) {
    throw new GeneralError({ message: err.message });
  }

  return 'Updated successfully.';
};

export default update;
