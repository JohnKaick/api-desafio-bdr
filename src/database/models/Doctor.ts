import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsEmail } from 'class-validator';

@Entity()
export default class Doctor {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  @IsEmail()
  email!: string;

  @Column({ name: 'is_active', default: true })
  isActive?: boolean;

  @Column({ name: 'created_at', default: 'now()' })
  createdAt?: Date;
}
