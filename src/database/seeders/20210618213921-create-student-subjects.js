module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('student_subject', [
    {
      student_id: 1,
      subject_id: 1,
      grade: 0,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      student_id: 1,
      subject_id: 2,
      grade: 0,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      student_id: 2,
      subject_id: 1,
      grade: 0,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      student_id: 4,
      subject_id: 1,
      grade: 0,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      student_id: 3,
      subject_id: 3,
      grade: 0,
      created_at: new Date(),
      updated_at: new Date(),
    },
  ]),
  down: (queryInterface) => queryInterface.bulkDelete('student_subject', null, {}),
};
