import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import mongoose from 'mongoose';

import router from './routes/router';
import { uri, options } from './config/database';

const app = express();
mongoose.connect(uri, options);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use('/api/v1', router);

export default app;
