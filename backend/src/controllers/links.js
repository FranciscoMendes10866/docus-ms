/* eslint-disable no-underscore-dangle */
import jwt from 'jsonwebtoken';

import Links from '../models/Links';

const createLink = (req, res) => {
  jwt.verify(req.token, process.env.JWT_PRIVATE_KEY, async (err, cred) => {
    if (err) {
      return res.sendStatus(403);
    }
    const newLink = new Links({
      linkName: req.body.linkName,
      linkURL: req.body.linkURL,
      user_id: cred.userDB._id,
    });
    const create = await newLink.save();
    return res.json(create);
  });
};

const getLinks = (req, res) => {
  jwt.verify(req.token, process.env.JWT_PRIVATE_KEY, async (err, cred) => {
    if (err) {
      return res.sendStatus(403);
    }
    const userId = cred.userDB._id;
    const getAll = await Links.find().where('user_id').equals(userId).exec();
    return res.json(getAll);
  });
};

const updateLink = (req, res) => {
  jwt.verify(req.token, process.env.JWT_PRIVATE_KEY, async (err, cred) => {
    if (err) {
      return res.sendStatus(403);
    }
    const { _id } = req.params;
    const userId = cred.userDB._id;
    await Links.findOneAndUpdate(_id).where('user_id').equals(userId).exec();
    return res.sendStatus(200);
  });
};

const deleteLink = (req, res) => {
  jwt.verify(req.token, process.env.JWT_PRIVATE_KEY, async (err, cred) => {
    if (err) {
      return res.sendStatus(403);
    }
    const { _id } = req.params;
    const userId = cred.userDB._id;
    await Links.findOneAndRemove(_id).where('user_id').equals(userId).exec();
    return res.sendStatus(200);
  });
};

export {
  createLink,
  updateLink,
  deleteLink,
  getLinks,
};
