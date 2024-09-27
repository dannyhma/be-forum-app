import express from 'express';
import {
  CreateQuestion,
  QuestionAll,
  DetailQuestion,
  UpdateQuestion,
  DeleteQuestion,
} from '../controllers/questionController.js';

const router = express.Router();

// CRUD Question

// create document
// post /api/v1/question
router.post('/', CreateQuestion);

// read document
// get /api/v1/question
router.get('/', QuestionAll);
// get /api/v1/question/:id
router.get('/:id', DetailQuestion);

// update document
// put /api/v1/question/:id
router.put('/:id', UpdateQuestion);

// update delete
// put /api/v1/question/:id
router.delete('/:id', DeleteQuestion);

export default router;
