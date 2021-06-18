import Sequelize, { Model } from 'sequelize';

class Subject extends Model {
  static init(sequelize) {
    super.init({
      subjectCode: Sequelize.STRING,
      subjectName: Sequelize.STRING,
    }, {
      sequelize,
      tableName: 'subject',
      underscored: true,
    });

    return this;
  }

  static associate(models) {
    this.belongsToMany(models.User, {
      through: 'user_subject',
      as: 'users',
    });

    this.belongsToMany(models.Student, {
      through: 'student_subject',
      as: 'students',
    });

    this.hasMany(models.Grade, {
      as: 'grades',
      foreignKey: 'subjectId',
    });
  }
}

export default Subject;
