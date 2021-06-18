module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('user', [
    {
      name: 'Ronaldo Alves',
      email: 'ronaldoapf@gmail.com',
      password: '$2a$08$uA0J6v82/5SEC8gKw42QU.QC2vtZaygPT1us8iTesxWLfYLXMwI8S',
      created_at: new Date(),
      updated_at: new Date(),
    },
  ]),
  down: (queryInterface) => queryInterface.bulkDelete('user', null, {}),
};
