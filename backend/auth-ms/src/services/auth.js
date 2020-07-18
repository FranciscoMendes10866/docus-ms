import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import User from '../models/User';

const createAccount = async (req, res) => {
  const hashed = bcrypt.hashSync(req.body.password, 10);
  const newUser = new User({
    email: req.body.email,
    password: hashed,
  });
  await newUser.save();
  return res.sendStatus(201);
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const userDB = await User.findOne({ email });
  const isMatch = bcrypt.compareSync(password, userDB.password);
  if (!isMatch) {
    throw new Error('Passwords don\'t match');
  } else {
    const token = jwt.sign({ userDB }, process.env.JWT_PRIVATE_KEY);
    return res.json({ token });
  }
};

export {
  createAccount,
  loginUser,
};
