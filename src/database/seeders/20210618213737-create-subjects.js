module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('subject', [
    {
      subject_code: 'IPC',
      subject_name: 'Introdução à Programação de Computadores',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      subject_code: 'PDS2',
      subject_name: 'Planejamento e Desenvolvimento de Sistemas 2',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      subject_code: 'ED1',
      subject_name: 'Estruturas de Dados 1',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      subject_code: 'SD',
      subject_name: 'Sistemas Distribuídos',
      created_at: new Date(),
      updated_at: new Date(),
    },
  ]),
  down: (queryInterface) => queryInterface.bulkDelete('subject', null, {}),
};
