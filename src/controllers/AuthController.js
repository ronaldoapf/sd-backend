import jwt from 'jsonwebtoken';

import User from '../app/models/User';

class AuthController {
  async store(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(401).json({ message: 'Usuário ou senha incorretos.' });

    const isValidPassword = user.checkPassword(password);
    if (!isValidPassword) return res.status(401).json({ message: 'Usuário ou senha incorretos.' });

    const { id, name } = user;
    const token = jwt.sign({ id }, 'grade_system_sd');

    return res.status(200).json({
      name,
      token,
    });
  }
}

export default new AuthController();
