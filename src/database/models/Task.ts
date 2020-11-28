import { DataTypes } from 'sequelize';
import sequelize from '..';
import { ITask } from '../../interfaces';
import User from './User';

const Task = sequelize.define<ITask>(
  'Task',
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    description: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING,
    },
    status: {
      allowNull: false,
      type: DataTypes.ENUM,
      values: ['open', 'doing', 'finished'],
      defaultValue: 'open',
    },
    createDate: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: new Date(),
    },
    startDate: {
      allowNull: true,
      type: DataTypes.DATE,
    },
    endDate: {
      allowNull: true,
      type: DataTypes.DATE,
    },
  },
  {
    timestamps: true,
    underscored: true,
    tableName: 'task',
  },
);

Task.belongsTo(User, { as: 'user', foreignKey: 'user_id' });

export default Task;
