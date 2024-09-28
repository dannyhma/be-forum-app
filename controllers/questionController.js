import Question from '../models/Question.js';
import asyncHandler from '../middleware/asyncHandler.js';

export const CreateQuestion = asyncHandler(async (req, res) => {
  const { title, question, category } = req.body;

  const newQuestion = await Question.create({
    title,
    question,
    category,
    userId: req.user._id,
  });

  return res.status(201).json({
    message: 'Successfully added question',
    data: newQuestion,
  });
});

export const QuestionAll = (req, res) => {
  res.send('All Question');
};

export const DetailQuestion = (req, res) => {
  res.send('Detail Question');
};

export const UpdateQuestion = (req, res) => {
  res.send('Update Question');
};

export const DeleteQuestion = (req, res) => {
  res.send('Delete Question');
};
