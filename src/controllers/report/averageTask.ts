import { Request, Response } from 'express';
import { averageTask } from '../../services/report';

const get = async (req: Request, res: Response): Promise<void> => {
  const result = await averageTask(Number(req.params.id));
  res.status(200).send(result);
};

export default get;
