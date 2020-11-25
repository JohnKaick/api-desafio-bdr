import { NextFunction, Request, Response } from 'express';
import { validate } from 'class-validator';
import { Doctor } from '../database/models';
import { UnprocessableEntity } from '../common';

const validationDoctor = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  const { email } = req.body;

  const doctor = new Doctor();
  doctor.email = email;

  const errors = await validate(doctor);
  if (errors.length === 0) {
    next();
  } else {
    const message = errors.map(err => err.property).join(',');
    throw new UnprocessableEntity({ message });
  }
};

export default validationDoctor;
