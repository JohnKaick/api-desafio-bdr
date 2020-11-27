import { Model } from 'sequelize';

interface ITask extends Model {
  id: number;
  description: string;
  status: string;
  createDate: Date;
  startDate: Date | null;
  endDate: Date | null;
}

export default ITask;
