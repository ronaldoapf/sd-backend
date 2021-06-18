import Sequelize from 'sequelize';

import User from '../app/models/User';
import Subject from '../app/models/Subject';
import Student from '../app/models/Student';
import config from '../config/database';
import Grade from '../app/models/Grade';

const models = [
  User,
  Grade,
  Subject,
  Student,
];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(config);
    models
      .map((model) => model.init(this.connection))
      .map((model) => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
