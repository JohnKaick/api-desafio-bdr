import { Request, Response } from 'express';
import { findAllDoctor, createDoctor } from '../services';

const getDoctor = async (req: Request, res: Response): Promise<void> => {
  const result = await findAllDoctor();
  res.status(200).send(result);
};

const postDoctor = async (req: Request, res: Response): Promise<void> => {
  const result = await createDoctor(req.body);
  res.status(200).send(result);
};

export { getDoctor, postDoctor };
