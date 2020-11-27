import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(`postgres://test:test@localhost:5432/db_test`);

export default sequelize;
