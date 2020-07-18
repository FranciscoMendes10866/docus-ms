import express from 'express';

import { createAccount, loginUser } from '../services/auth';

const router = express.Router();

router.post('/register', createAccount);

router.post('/login', loginUser);

export default router;
