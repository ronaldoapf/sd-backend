import Subject from '../app/models/Subject';
import Grade from '../app/models/Grade';
import Student from '../app/models/Student';

class SubjectController {
  async index(req, res) {
    const { id } = req.params;
    const subject = await Subject.findByPk(id, {
      attributes: ['id', 'subjectCode', 'subjectName'],
      include: [{
        model: Grade,
        as: 'grades',
        attributes: ['id', 'grade'],
        include: [
          { model: Student, as: 'student', attributes: ['id', 'name'] },
        ],
      }],
    });
    return res.status(200).json(subject);
  }

  async list(_, res) {
    const subjects = await Subject.findAll();
    return res.status(200).json(subjects);
  }

  async store(req, res) {
    const subject = await Subject.create(req.body);
    return res.status(200).json(subject);
  }
}

export default new SubjectController();
