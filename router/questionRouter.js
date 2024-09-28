import express from 'express';
import {
  CreateQuestion,
  QuestionAll,
  DetailQuestion,
  UpdateQuestion,
  DeleteQuestion,
} from '../controllers/questionController.js';
import { authMiddleware, permissonUser } from '../middleware/authMiddleware.js';

const router = express.Router();

// CRUD Question

// create document
// post /api/v1/question
router.post('/', authMiddleware, CreateQuestion);

// read document
// get /api/v1/question
router.get('/', QuestionAll);
// get /api/v1/question/:id
router.get('/:id', DetailQuestion);

// update document
// put /api/v1/question/:id
router.put('/:id', authMiddleware, UpdateQuestion);

// update delete
// put /api/v1/question/:id
router.delete('/:id', authMiddleware, DeleteQuestion);

export default router;
