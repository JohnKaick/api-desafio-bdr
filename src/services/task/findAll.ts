import { Op } from 'sequelize';
import { GeneralError } from '../../common';
import { Task, User } from '../../database/models';
import { ITask } from '../../interfaces';

const findAll = async (query: any): Promise<ITask[]> => {
  let filters;
  if (query?.description) {
    filters = {
      description: {
        [Op.like]: `${query.description}%`,
      },
    };
  }
  if (query?.status) filters = { status: query.status };

  const orderSplit = query?.order?.split(' ');
  try {
    return Task.findAll({
      where: filters,
      order: [
        query?.order ? [orderSplit[0], orderSplit[1]] : ['id', 'ASC'],
        query?.order && query?.order === 'responsible'
          ? [{ model: User, as: 'user' }, 'name', orderSplit[1]]
          : [{ model: User, as: 'user' }, 'id', 'ASC'],
      ],
      include: {
        model: User,
        as: 'user',
        required: true,
      },
    });
  } catch (err) {
    throw new GeneralError({ message: 'Error find task.' });
  }
};

export default findAll;
