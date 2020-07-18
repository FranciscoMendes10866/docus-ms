// import jwt from 'jsonwebtoken';
// import bcrypt from 'bcrypt';

// import Links from '../models/Links';

const createLink = async (req, res) => {
  res.json({ msg: 'Create link route' });
};

const getLinks = async (req, res) => {
  res.json({ msg: 'Get links route' });
};

const updateLink = async (req, res) => {
  res.json({ msg: 'Update link route' });
};

const deleteLink = async (req, res) => {
  res.json({ msg: 'Delete link route' });
};

export {
  createLink,
  updateLink,
  deleteLink,
  getLinks,
};
