import express from 'express';

import {
  createLink, updateLink, deleteLink, getLinks,
} from '../services/links';
import authGuard from '../guards/token';

const router = express.Router();

router.post('/', authGuard, createLink);

router.get('/', authGuard, getLinks);

router.put('/:_id', authGuard, updateLink);

router.delete('/:_id', authGuard, deleteLink);

export default router;
