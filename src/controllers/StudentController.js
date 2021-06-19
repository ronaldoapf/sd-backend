import { Op } from 'sequelize';

import Grade from '../app/models/Grade';
import Student from '../app/models/Student';
import Subject from '../app/models/Subject';

class StudentController {
  async index(req, res) {
    const { id, email } = req.query;
    if (!id && !email) {
      return res.status(400).json({ message: 'Forneça um id ou um email' });
    }
    const student = await Student.findOne({
      where: {
        [Op.or]: [
          { id: id || null },
          { email: id ? null : email ?? '' },
        ],
      },
      attributes: ['id', 'name', 'email'],
      include: [{
        model: Grade,
        as: 'grades',
        attributes: ['grade'],
        include: [
          { model: Subject, as: 'subject', attributes: ['id', 'subjectName', 'subjectCode'] },
        ],
      }],
    });

    if (!student) return res.status(404).json({ message: 'Não encontrado.' });

    return res.status(200).json(student);
  }

  async list(_, res) {
    const students = await Student.findAll({
      include: [{
        model: Grade,
        as: 'grades',
        attributes: ['grade'],
        include: [
          { model: Subject, as: 'subject', attributes: ['id', 'subjectName', 'subjectCode'] },
        ],
      }],
    });
    return res.status(200).json(students);
  }

  async store(req, res) {
    const student = await Student.create(req.body);
    return res.status(200).json(student);
  }
}

export default new StudentController();
