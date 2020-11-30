/* eslint-disable @typescript-eslint/no-unused-vars */
import { Op } from 'sequelize';
import { format } from 'date-fns';
import { Task } from '../../database/models';
import { ITask, IAverageTask } from '../../interfaces';

const timeDoingToFinished = async (): Promise<IAverageTask> => {
  let time = 0;

  const tasks = await Task.findAll({
    where: {
      [Op.and]: [
        {
          startDate: {
            [Op.ne]: null,
          },
        },
        {
          endDate: {
            [Op.ne]: null,
          },
        },
      ],
    },
  });

  tasks.forEach((task: ITask) => {
    const timeStart = new Date(task.startDate).getTime();
    const timeEnd = new Date(task.endDate).getTime();
    const averageTime = timeEnd - timeStart;
    time += averageTime;
  });

  const averageTime = time / tasks.length;

  const timeFormat = format(new Date(averageTime), 'HH:mm:ss');

  return {
    total: tasks.length,
    averageTime: timeFormat,
  };
};

export default timeDoingToFinished;
