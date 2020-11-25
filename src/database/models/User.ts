import { DataTypes } from 'sequelize';
import sequelize from '..';
import { IUser } from '../../interfaces';

const User = sequelize.define<IUser>(
  'User',
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
    underscored: true,
    tableName: 'user',
  },
);

export default User;
