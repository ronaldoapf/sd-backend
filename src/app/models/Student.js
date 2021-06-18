import Sequelize, { Model } from 'sequelize';

class Student extends Model {
  static init(sequelize) {
    super.init({
      name: Sequelize.STRING,
    }, {
      sequelize,
      tableName: 'student',
      underscored: true,
    });

    return this;
  }

  static associate(models) {
    this.belongsToMany(models.Subject, {
      through: 'student_subject',
      as: 'subjects',
    });

    this.hasMany(models.Grade, {
      as: 'grades',
      foreignKey: 'studentId',
    });
  }
}

export default Student;
