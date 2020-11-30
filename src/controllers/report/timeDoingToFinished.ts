import { Request, Response } from 'express';
import { timeDoingToFinished } from '../../services/report';

const get = async (req: Request, res: Response): Promise<void> => {
  const result = await timeDoingToFinished();
  res.status(200).send(result);
};

export default get;
