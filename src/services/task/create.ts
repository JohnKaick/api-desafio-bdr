import { BadRequest, GeneralError } from '../../common';
import { Task, User } from '../../database/models';
import { ITask } from '../../interfaces';

const create = async (data: ITask): Promise<ITask> => {
  data.status = 'open';

  if (data?.responsible) {
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
    return Task.create({ ...data, startDate: null, endDate: null });
  } catch (err) {
    throw new GeneralError({ message: err.message });
  }
};

export default create;
