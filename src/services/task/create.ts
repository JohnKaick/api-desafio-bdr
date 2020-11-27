import { GeneralError } from '../../common';
import { Task } from '../../database/models';
import { ITask } from '../../interfaces';

const create = async (data: ITask): Promise<ITask> => {
  data.status = 'open';
  data.startDate = null;
  data.endDate = null;

  try {
    return Task.create(data);
  } catch (err) {
    throw new GeneralError({ message: err.message });
  }
};

export default create;
