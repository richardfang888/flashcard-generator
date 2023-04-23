import mongoose from "mongoose";

const flashCardSchema = new mongoose.Schema({
    question: {
      type: text,
      required: true
    },
    answer: {
      type: text,
      required: true
    },
    status: {
      type: text,
      enum: ['New', 'Reviewed', 'Mastered'],
      default: 'New'
    }
});

const studySetSchema = new mongoose.Schema({
    userId: {
      type: text,
      required: true,
    },
    title: {
      type: text,
      required: true
    },
    description: {
      type: text,
      required: true
    },
    flashCards: [flashCardSchema]
});

const FlashCard = mongoose.model('FlashCard', flashCardSchema)
const StudySet = mongoose.model('StudySet', studySetSchema)

export default StudySet