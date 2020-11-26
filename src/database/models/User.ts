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
      unique: true,
      type: DataTypes.STRING,
    },
    email: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING,
      validate: {
        notNull: {
          msg: 'Please enter the email',
        },
        isEmail: {
          msg: 'Invalid email',
        },
        notEmpty: {
          msg: 'Email field is required',
        },
      },
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: {
          msg: 'Please enter the password',
        },
        notEmpty: {
          msg: 'Password field is required',
        },
      },
    },
    roles: {
      allowNull: false,
      type: DataTypes.ENUM,
      values: ['admin', 'agent'],
      validate: {
        notNull: {
          msg: 'Please enter the roles',
        },
        notEmpty: {
          msg: 'Roles field is required',
        },
      },
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    timestamps: true,
    underscored: true,
    tableName: 'user',
  },
);

export default User;
