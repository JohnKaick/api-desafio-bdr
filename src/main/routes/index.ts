import { Router, Request, Response } from 'express';
import { verifyToken, rolesAdmin } from '../middlewares';
import {
  getUser,
  postUser,
  putUser,
  deleteUser,
  postLoginUser,
  getTask,
  getOneTask,
  postTask,
  putTask,
  deleteTask,
  performanceUser,
  taskFinished,
} from '../../controllers';

const router = Router();

// routes public
router.get(
  '/',
  (req: Request, res: Response): Response =>
    res.status(200).send({ message: `${process.env.API_NAME} OK` }),
);
router.post('/user/login', postLoginUser);

// routes private
router.use(verifyToken);
router.get('/task', getTask);
router.get('/task/:id', getOneTask);
router.post('/task', postTask);
router.put('/task/:id', putTask);
router.delete('/task/:id', deleteTask);

router.get('/report/performance-user', performanceUser);
router.get('/report/task/finished', taskFinished);

// routes private with roles admin
router.use(rolesAdmin);
router.get('/user', getUser);
router.post('/user', postUser);
router.put('/user/:id', putUser);
router.delete('/user/:id', deleteUser);

export default router;
