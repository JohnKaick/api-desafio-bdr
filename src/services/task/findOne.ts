import { GeneralError } from '../../common';
import { Task } from '../../database/models';
import { ITask } from '../../interfaces';

const findOne = async (id: number): Promise<ITask | null> => {
  try {
    return Task.findOne({
      where: {
        id,
      },
    });
  } catch (err) {
    throw new GeneralError({ message: 'Error find task.' });
  }
};

export default findOne;
