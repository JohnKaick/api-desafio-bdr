const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const password = await bcrypt.hash('admin', 10);
    await queryInterface.bulkInsert(
      'user',
      [
        {
          name: 'admin',
          email: 'admin@email.com.br',
          password,
          roles: 'admin',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('user', null, {});
  },
};
