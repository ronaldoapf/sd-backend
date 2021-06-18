module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('student', [
    {
      name: 'John Doe',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      name: 'Jeffery Tucker',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      name: 'Moira Anselm',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      name: 'Kolby Kaylee',
      created_at: new Date(),
      updated_at: new Date(),
    },
  ]),
  down: (queryInterface) => queryInterface.bulkDelete('student', null, {}),
};
