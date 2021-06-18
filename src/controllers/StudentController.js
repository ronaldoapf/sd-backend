import Grade from '../app/models/Grade';
import Student from '../app/models/Student';
import Subject from '../app/models/Subject';

class StudentController {
  async index(req, res) {
    const { id } = req.params;
    const student = await Student.findByPk(id, {
      attributes: ['id', 'name'],
      include: [{
        model: Grade,
        as: 'grades',
        attributes: ['grade'],
        include: [
          { model: Subject, as: 'subject', attributes: ['id', 'subjectName', 'subjectCode'] },
        ],
      }],
    });
    return res.status(200).json(student);
  }

  async list(_, res) {
    const students = await Student.findAll();
    return res.status(200).json(students);
  }

  async store(req, res) {
    const student = await Student.create(req.body);
    return res.status(200).json(student);
  }
}

export default new StudentController();
