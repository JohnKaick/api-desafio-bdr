import { Router, Request, Response } from 'express';
import keys from '../../config';
import { getDoctor, postDoctor } from '../../controllers';
import { validationDoctor } from '../../validations';

const router = Router();

router.get(
  '/',
  (req: Request, res: Response): Response =>
    res.status(200).send({ message: `${keys.SVC_NAME} OK` }),
);
router.get('/doctor', getDoctor);
router.post('/doctor', validationDoctor, postDoctor);

export default router;
