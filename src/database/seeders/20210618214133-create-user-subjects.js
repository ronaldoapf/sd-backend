module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('user_subject', [
    {
      user_id: 1,
      subject_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      user_id: 1,
      subject_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      user_id: 1,
      subject_id: 3,
      created_at: new Date(),
      updated_at: new Date(),
    },
  ]),
  down: (queryInterface) => queryInterface.bulkDelete('user_subject', null, {}),
};
