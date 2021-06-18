module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('student', [
    {
      name: 'John Doe',
      email: 'john.doe@gmail.com',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      name: 'Jeffery Tucker',
      email: 'jeffery.tucker@gmail.com',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      name: 'Moira Anselm',
      email: 'moira.anselm@gmail.com',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      name: 'Kolby Kaylee',
      email: 'kolby.kaylee@gmail.com',
      created_at: new Date(),
      updated_at: new Date(),
    },
  ]),
  down: (queryInterface) => queryInterface.bulkDelete('student', null, {}),
};
