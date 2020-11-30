import { Request, Response } from 'express';
import { taskFinished } from '../../services/report';

const get = async (req: Request, res: Response): Promise<void> => {
  const result = await taskFinished();
  res.status(200).send(result);
};

export default get;
