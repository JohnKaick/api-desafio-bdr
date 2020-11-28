import { BadRequest, GeneralError } from '../../common';
import { Task, User } from '../../database/models';
import { ITask } from '../../interfaces';

const update = async (id: number, data: ITask): Promise<string> => {
  const taskExists = await Task.findOne({
    where: { id },
  });

  if (!taskExists?.id) {
    throw new BadRequest({ message: 'Task not found' });
  }

  if (data.status === 'doing') {
    data.startDate = new Date();
    data.endDate = null;
  }

  if (data.status === 'finished') {
    if (!taskExists?.startDate) data.startDate = new Date();
    data.endDate = new Date();
  }

  if (data.status === 'doing' || data.status === 'finished') {
    if (!data?.responsible) {
      throw new BadRequest({ message: 'Please inform the responsible' });
    }
    const user = await User.findOne({
      where: {
        name: data.responsible,
      },
    });
    if (!user?.id) {
      throw new BadRequest({ message: 'Responsible not found' });
    }
    data.user_id = user.id;
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
