import { Request, Response } from 'express';
import { timeOpenToDoing } from '../../services/report';

const get = async (req: Request, res: Response): Promise<void> => {
  const result = await timeOpenToDoing();
  res.status(200).send(result);
};

export default get;
