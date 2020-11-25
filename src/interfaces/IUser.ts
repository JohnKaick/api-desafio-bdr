import { Model } from 'sequelize';

interface IUser extends Model {
  id: number;
  name: string;
}

export default IUser;
