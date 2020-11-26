import { Router, Request, Response } from 'express';
import keys from '../../config';
import { verifyToken, rolesAdmin } from '../middlewares';
import {
  getUser,
  postUser,
  putUser,
  deleteUser,
  postLoginUser,
} from '../../controllers';

const router = Router();

// routes public
router.get(
  '/',
  (req: Request, res: Response): Response =>
    res.status(200).send({ message: `${keys.SVC_NAME} OK` }),
);
router.post('/user/login', postLoginUser);

// routes private
router.use(verifyToken);

// routes private with roles admin
router.use(rolesAdmin);
router.get('/user', getUser);
router.post('/user', postUser);
router.put('/user/:id', putUser);
router.delete('/user/:id', deleteUser);

export default router;
