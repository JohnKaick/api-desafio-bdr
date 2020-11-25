import { getRepository } from 'typeorm';
import { Doctor } from '../database/models';
import { BadRequest } from '../common';

const findAllDoctor = async (): Promise<Doctor[]> => {
  return getRepository(Doctor).find();
};

const createDoctor = async (data: Doctor): Promise<Doctor> => {
  const doctor = await getRepository(Doctor)
    .createQueryBuilder('doctor')
    .where('doctor.email = :email', { email: data.email })
    .getOne();

  if (doctor?.email === data.email) {
    throw new BadRequest({ message: 'E-mail já possui cadastro.' });
  }

  return getRepository(Doctor).save(data);
};

export { findAllDoctor, createDoctor };
