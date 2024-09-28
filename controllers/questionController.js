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

  return res.status(200).json({
    message: 'Successfully added question',
    data: newQuestion,
  });
});

export const QuestionAll = asyncHandler(async (req, res) => {
  const questionData = await Question.find({});

  return res.status(200).json({
    message: 'Successfully view all question',
    data: questionData,
  });
});

export const DetailQuestion = asyncHandler(async (req, res) => {
  const idParams = req.params.id;

  const questionDetail = await Question.findById(idParams);

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

export const UpdateQuestion = (req, res) => {
  res.send('Update Question');
};

export const DeleteQuestion = (req, res) => {
  res.send('Delete Question');
};
