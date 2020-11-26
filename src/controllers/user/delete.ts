import { Request, Response } from 'express';
import { remove } from '../../services/user';

const deleteUser = async (req: Request, res: Response): Promise<void> => {
  const result = await remove(Number(req.params.id));
  res.status(200).send(result);
};

export default deleteUser;
