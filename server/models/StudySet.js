import mongoose from "mongoose";

const flashCardSchema = new mongoose.Schema({
    question: {
      type: String,
      required: true
    },
    answer: {
      type: String,
      required: true
    },
    status: {
      type: String,
      enum: ['New', 'Reviewed', 'Mastered'],
      default: 'New'
    }
});

const studySetSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    flashCards: [flashCardSchema]
});

const StudySet = mongoose.model('StudySet', studySetSchema)

export default StudySet