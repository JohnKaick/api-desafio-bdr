import { GeneralError } from '../../common';
import { Task } from '../../database/models';
import { ITask } from '../../interfaces';

const update = async (id: number, data: ITask): Promise<string> => {
  if (data.status === 'doing') {
    data.startDate = new Date();
    data.endDate = null;
  }

  if (data.status === 'finished') {
    data.endDate = new Date();
  }

  try {
    await Task.update(data, {
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
