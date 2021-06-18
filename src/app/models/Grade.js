import Sequelize, { Model } from 'sequelize';

class Grade extends Model {
  static init(sequelize) {
    super.init({
      grade: Sequelize.FLOAT,
    }, {
      sequelize,
      tableName: 'student_subject',
      underscored: true,
    });

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Subject, {
      as: 'subject',
      foreignKey: 'subjectId',
    });

    this.belongsTo(models.Student, {
      as: 'student',
      foreignKey: 'studentId',
    });
  }
}

export default Grade;
