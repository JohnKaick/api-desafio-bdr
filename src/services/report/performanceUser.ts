/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */
import { Op } from 'sequelize';
import { Task, User } from '../../database/models';
import { IPerformanceUser } from '../../interfaces';

const performanceUser = async (
  startDate: Date,
  endDate: Date,
): Promise<IPerformanceUser[]> => {
  const result = [];

  const users = await User.findAll({
    where: {
      isActive: true,
    },
  });

  for (const user of users) {
    const open = await Task.findAndCountAll({
      where: {
        [Op.and]: [
          {
            user_id: user.id,
          },
          {
            status: 'open',
          },
          {
            createDate: {
              [Op.between]: [startDate, endDate],
            },
          },
        ],
      },
    });

    const doing = await Task.findAndCountAll({
      where: {
        [Op.and]: [
          {
            user_id: user.id,
          },
          {
            status: 'doing',
          },
          {
            createDate: {
              [Op.between]: [startDate, endDate],
            },
          },
        ],
      },
    });

    const finished = await Task.findAndCountAll({
      where: {
        [Op.and]: [
          {
            user_id: user.id,
          },
          {
            status: 'finished',
          },
          {
            createDate: {
              [Op.between]: [startDate, endDate],
            },
          },
        ],
      },
    });

    result.push({
      user,
      countTask: {
        open: open.count,
        doing: doing.count,
        finished: finished.count,
      },
    });
  }

  return result;
};

export default performanceUser;
