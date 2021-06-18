import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class User extends Model {
  static init(sequelize) {
    super.init({
      name: Sequelize.STRING,
      email: Sequelize.STRING,
      password: Sequelize.STRING,
    }, {
      sequelize,
      tableName: 'user',
      underscored: true,
    });

    this.addHook('beforeSave', async (user) => {
      if (user.password) {
        user.password = await bcrypt.hash(user.password, 8);
      }
    });

    return this;
  }

  static associate(models) {
    this.belongsToMany(models.Subject, {
      through: 'user_subject',
      as: 'subjects',
    });
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password);
  }
}

export default User;
