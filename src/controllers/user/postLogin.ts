import { Request, Response } from 'express';
import { login } from '../../services/user';

const postLogin = async (req: Request, res: Response): Promise<void> => {
  const result = await login(req.body);
  res.status(200).send(result);
};

export default postLogin;
