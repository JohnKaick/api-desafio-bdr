import { Request, Response } from 'express';
import { findAll } from '../../services/task';

const get = async (req: Request, res: Response): Promise<void> => {
  const result = await findAll();
  res.status(200).send(result);
};

export default get;
