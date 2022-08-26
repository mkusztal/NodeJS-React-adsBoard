const User = require('../models/user.model');
const bcrypt = require('bcrypt');

exports.getLoggedUser = async (req, res) => {
  try {
    if (req.user) {
      const user = await User.findOne(req.user);
      if (!ad) res.status(404).json({ message: 'Not found...' });
      else res.json(user);
    }
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.register = async (req, res) => {
  try {
    const { login, password } = req.body;
    if (
      login &&
      typeof login === 'string' &&
      password &&
      typeof password === 'string'
    ) {
      const userWithLogin = await User.findOne({ login });
      if (userWithLogin) {
        return res
          .status(409)
          .json({ message: 'User with this login already exists' });
      }

      const user = new User({
        login,
        password: await bcrypt.hash(password, 10),
      });
      await user.save();
      res.status(201).send({ message: 'User created ' + user.login });
    } else {
      res.status(400).json({ message: 'Bad request' });
    }
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.login = async (req, res) => {};
