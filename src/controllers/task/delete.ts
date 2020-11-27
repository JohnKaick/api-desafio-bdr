import { Request, Response } from 'express';
import { remove } from '../../services/task';

const deleteTask = async (req: Request, res: Response): Promise<void> => {
  const result = await remove(Number(req.params.id));
  res.status(200).send(result);
};

export default deleteTask;
