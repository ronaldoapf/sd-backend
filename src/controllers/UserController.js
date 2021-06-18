import User from '../app/models/User';

class UserController {
  async list(_, res) {
    const users = await User.findAll();
    return res.status(200).json(users);
  }

  async store(req, res) {
    const user = await User.create(req.body);
    return res.status(200).json(user);
  }
}

export default new UserController();
