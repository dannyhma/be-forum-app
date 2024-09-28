import Question from '../models/Question.js';
import asyncHandler from '../middleware/asyncHandler.js';
import { checkPermission } from '../middleware/checkPermission.js';

export const CreateQuestion = asyncHandler(async (req, res) => {
  const { title, question, category } = req.body;

  const newQuestion = await Question.create({
    title,
    question,
    category,
    userId: req.user._id,
  });

  return res.status(200).json({
    message: 'Successfully added question',
    data: newQuestion,
  });
});

export const QuestionAll = asyncHandler(async (req, res) => {
  const questionData = await Question.find();

  return res.status(200).json({
    message: 'Successfully view all question',
    data: questionData,
  });
});

export const DetailQuestion = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const questionDetail = await Question.findById(id);

  if (!questionDetail) {
    return res.status(404).json({
      message: 'Question id not found',
    });
  }

  return res.status(200).json({
    message: 'Successfully view detail question',
    data: questionDetail,
  });
});

export const UpdateQuestion = asyncHandler(async (req, res) => {
  const { title, question, category } = req.body;
  const { id } = req.params;

  const idQuestion = await Question.findById(id);

  if (!idQuestion) {
    res.status(404);
    throw new Error('Question Id not found');
  }

  checkPermission(req.user, idQuestion.userId, res);

  idQuestion.title = title;
  idQuestion.question = question;
  idQuestion.category = category;

  await idQuestion.save();

  return res.status(200).json({
    message: 'Successfully updated question',
    data: idQuestion,
  });
});

export const DeleteQuestion = (req, res) => {
  res.send('Delete Question');
};
