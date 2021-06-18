import Grade from '../app/models/Grade';
import Student from '../app/models/Student';
import Subject from '../app/models/Subject';

class UserSubjectController {
  async store(req, res) {
    const { subjectId, studentId } = req.params;

    const student = await Student.findByPk(studentId);
    if (!student) {
      return res.status(404).json({ message: 'Não encontrado' });
    }
    const subject = await Subject.findByPk(subjectId);
    if (!subject) {
      return res.status(404).json({ message: 'Não encontrado' });
    }

    const relation = await Grade.findOne({ where: { subjectId, studentId } });

    const { grade } = req.body;

    if (!relation) {
      const newGrade = await Grade.create({
        subjectId,
        studentId,
        grade,
      });
      return res.status(200).json(newGrade);
    }

    relation.grade = grade;
    await relation.save();

    return res.json(relation);
  }

  async delete(req, res) {
    const { subjectId, studentId } = req.params;
    const relation = await Grade.findOne({ where: { subjectId, studentId } });
    if (!relation) {
      return res.status(404).json({ message: 'Não encontrado' });
    }
    await relation.destroy();
    return res.status(200).json({ message: 'Excluído com sucesso.' });
  }
}

export default new UserSubjectController();
