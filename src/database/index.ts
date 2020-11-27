import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(`postgres://${process.env.DATABASE_URL}`);

export default sequelize;
