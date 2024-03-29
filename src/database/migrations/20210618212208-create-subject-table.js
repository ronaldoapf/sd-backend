module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('subject', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    subject_code: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    subject_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  }),

  down: async (queryInterface) => queryInterface.dropTable('subject'),
};
