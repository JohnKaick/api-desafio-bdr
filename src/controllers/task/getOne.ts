import { Request, Response } from 'express';
import { findOne } from '../../services/task';

const get = async (req: Request, res: Response): Promise<void> => {
  const result = await findOne(Number(req.params.id));
  res.status(200).send(result);
};

export default get;
