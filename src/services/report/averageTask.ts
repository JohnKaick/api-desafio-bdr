import { Op } from 'sequelize';
import { Task } from '../../database/models';
import { IAverageTask } from '../../interfaces';

const averageTask = async (id: number): Promise<IAverageTask> => {
  const total = await Task.findAndCountAll({
    where: {
      user_id: id,
    },
  });

  const finished = await Task.findAndCountAll({
    where: {
      [Op.and]: [
        {
          user_id: id,
        },
        {
          status: 'finished',
        },
      ],
    },
  });

  const average = (finished.count / total.count) * 100;

  return {
    total: total.count,
    finished: finished.count,
    average: `${average.toFixed(2)}%`,
  };
};

export default averageTask;
