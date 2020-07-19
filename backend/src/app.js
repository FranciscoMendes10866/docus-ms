import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import mongoose from 'mongoose';

import authRouter from './routes/auth';
import linksRouter from './routes/links';
import { uri, options } from './config/database';

const app = express();
mongoose.connect(uri, options);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/links', linksRouter);

export default app;
