import { GeneralError } from '../../common';
import { Task } from '../../database/models';
import { ITask } from '../../interfaces';

const findAll = async (): Promise<ITask[]> => {
  try {
    return Task.findAll({});
  } catch (err) {
    throw new GeneralError({ message: 'Error find task.' });
  }
};

export default findAll;
