import { GeneralError } from '../../common';
import { User } from '../../database/models';

const remove = async (id: number): Promise<string> => {
  try {
    await User.update(
      { isActive: false },
      {
        where: {
          id,
        },
      },
    );
  } catch (err) {
    throw new GeneralError({ message: 'Error remove user.' });
  }

  return 'Successfully removed.';
};

export default remove;
