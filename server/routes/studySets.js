import express from 'express';
import {
  addStudySet,
  deleteStudySet,
  updateStudySet,
  addFlashCard,
  deleteFlashCard,
  updateFlashCard,
  generateFlashCards,
} from '../controllers/studySets.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

// Routes for StudySets
router.post('/studysets', addStudySet); //add a new studySet
router.delete('/studysets/:id', deleteStudySet); //delete an existing studySet
router.put('/studysets/:id', updateStudySet); //update an existing studySet

// Routes for FlashCards
router.post('/studysets/:id/flashcards', addFlashCard); //add a new flashcard manually
router.delete('/studysets/:id/flashcards/:flashCardId', deleteFlashCard); //delete an existing flashcard
router.put('/studysets/:id/flashcards/:flashCardId', updateFlashCard); //update an existing flashcard
router.post('/studysets/generate', generateFlashCards); //auto generate flashcards using cohere

export default router;
