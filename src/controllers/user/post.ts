import { Request, Response } from 'express';
import { create } from '../../services/user';

const post = async (req: Request, res: Response): Promise<void> => {
  const result = await create(req.body);
  res.status(200).send(result);
};

export default post;
