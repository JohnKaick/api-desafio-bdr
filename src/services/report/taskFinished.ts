import { GeneralError } from '../../common';
import { Task } from '../../database/models';
import { ITaskFinished } from '../../interfaces';

const taskFinished = async (): Promise<ITaskFinished> => {
  try {
    const { count } = await Task.findAndCountAll({
      where: {
        status: 'finished',
      },
    });
    return { count };
  } catch (err) {
    throw new GeneralError({
      message: 'Error find count task with status finished.',
    });
  }
};

export default taskFinished;
