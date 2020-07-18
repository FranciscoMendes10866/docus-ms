import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import User from '../models/User';

const createAccount = async (req, res) => {
  const { email, password } = req.body;
  const hashed = bcrypt.hashSync(password, 10);
  await User.create({ email, password: hashed });
  return res.sendStatus(201);
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const userDB = await User.findOne({ email });
  const isMatch = bcrypt.compareSync(password, userDB.password);
  if (!isMatch) {
    throw new Error('Passwords don\'t match');
  } else {
    const token = jwt.sign({ userDB }, process.env.JWT_SECRET);
    return res.json({ token });
  }
};

export {
  createAccount,
  loginUser,
};
