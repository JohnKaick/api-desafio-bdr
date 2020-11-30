/* eslint-disable @typescript-eslint/no-unused-vars */
import { Op } from 'sequelize';
import { format } from 'date-fns';
import { Task } from '../../database/models';
import { ITask, IAverageTask } from '../../interfaces';

const timeOpenToDoing = async (): Promise<IAverageTask> => {
  let time = 0;

  const tasks = await Task.findAll({
    where: {
      [Op.and]: [
        {
          createDate: {
            [Op.ne]: null,
          },
        },
        {
          startDate: {
            [Op.ne]: null,
          },
        },
      ],
    },
  });

  tasks.forEach((task: ITask) => {
    const timeCreate = new Date(task.createDate).getTime();
    const timeStart = new Date(task.startDate).getTime();
    const averageTime = timeStart - timeCreate;
    time += averageTime;
  });

  const averageTime = time / tasks.length;

  const timeFormat = format(new Date(averageTime), 'HH:mm:ss');

  return {
    total: tasks.length,
    averageTime: timeFormat,
  };
};

export default timeOpenToDoing;
