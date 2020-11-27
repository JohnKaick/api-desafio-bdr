import { Request, Response } from 'express';
import { update } from '../../services/task';

const put = async (req: Request, res: Response): Promise<void> => {
  const result = await update(Number(req.params.id), req.body);
  res.status(200).send(result);
};

export default put;
