import { GeneralError } from '../../common';
import { Task } from '../../database/models';

const remove = async (id: number): Promise<string> => {
  try {
    await Task.destroy({
      where: {
        id,
      },
      force: true,
    });
  } catch (err) {
    throw new GeneralError({ message: 'Error remove task.' });
  }

  return 'Successfully removed.';
};

export default remove;
