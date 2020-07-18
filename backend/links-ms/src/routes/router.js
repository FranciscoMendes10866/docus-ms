import express from 'express';

import {
  createLink, updateLink, deleteLink, getLinks,
} from '../services/links';
import authGuard from '../guards/token';

const router = express.Router();

router.post('/', authGuard, createLink);

router.get('/', authGuard, getLinks);

router.put('/:id', authGuard, updateLink);

router.delete('/:id', authGuard, deleteLink);

export default router;
