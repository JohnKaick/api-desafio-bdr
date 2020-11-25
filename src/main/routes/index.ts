import { Router, Request, Response } from 'express';
import keys from '../../config';
import { getUser, postUser } from '../../controllers';

const router = Router();

router.get(
  '/',
  (req: Request, res: Response): Response =>
    res.status(200).send({ message: `${keys.SVC_NAME} OK` }),
);
router.get('/user', getUser);
router.post('/user', postUser);

export default router;
