module.exports = {
  up: async (queryInterface, Sequelize) => [
    queryInterface.addColumn('user', 'email', {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    }),
    queryInterface.addColumn('user', 'password', {
      type: Sequelize.STRING,
      allowNull: false,
    }),
  ],

  down: async (queryInterface) => [
    queryInterface.removeColumn('user', 'email'),
    queryInterface.removeColumn('user', 'password'),
  ],
};
