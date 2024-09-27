import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import authRouter from './router/authRouter.js';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import { notFound, errorHandler } from './middleware/errorHandler.js';

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
    console.log('db connected');
  })
  .catch((err) => {
    console.error('failed to connect to mongodb', err);
  });

// endpoint
app.get('/api/v1/test', (req, res) => {
  res.status(200).json({
    message: 'message from express.js',
  });
});

// parent router
app.use('/api/v1/auth', authRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`example app listening on port http://localhost:${port}`);
});
