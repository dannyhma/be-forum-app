import mongoose, { Schema } from 'mongoose';

const questionSchema = new mongoose.Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'User ID must be filled in'],
    },
    title: {
      type: String,
      required: [true, 'Title must be entered'],
      unique: [true, 'The question title has already been created'],
    },
    question: {
      type: String,
      required: [true, 'Question must be entered'],
    },
    category: {
      type: String,
      enum: [
        'frontend',
        'backend',
        'mongodb',
        'expressjs',
        'vuejs',
        'nodejs',
        'reactjs',
        'nuxtjs',
      ],
      required: [true, 'Question must be category'],
    },

    countVote: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const Question = mongoose.model('Question', questionSchema);

export default Question;
