import { Model } from 'sequelize';

interface IUser extends Model {
  id: number;
  uuid: string;
  name: string;
  email: string;
  password: string;
  roles: string;
  isActive: string;
}

export default IUser;
