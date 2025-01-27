import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';

// middleware
import { notFound, errorHandler } from './middleware/errorHandler.js';

// router
import authRouter from './router/authRouter.js';
import questionRouter from './router/questionRouter.js';

dotenv.config();

const app = express();
const port = 3000;

// middleware
// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// connection db
mongoose
  .connect(process.env.DATABASE, {})
  .then(() => {
    console.log('Database connected');
  })
  .catch((err) => {
    console.error('Failed to connect to mongodb', err);
  });

// endpoint
// app.get('/api/v1/test', (req, res) => {
//   res.status(200).json({
//     message: 'Message from express.js',
//   });
// });

// parent router
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/question', questionRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
