import { Request, Response } from 'express';
import { performanceUser } from '../../services/report';

const get = async (req: Request, res: Response): Promise<void> => {
  const { startDate, endDate } = req.query;
  const result = await performanceUser(
    new Date(startDate as string),
    new Date(endDate as string),
  );
  res.status(200).send(result);
};

export default get;
