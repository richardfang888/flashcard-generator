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
router.post('/studysets', verifyToken, addStudySet); //add a new studySet
router.delete('/studysets/:id', verifyToken, deleteStudySet); //delete an existing studySet
router.put('/studysets/:id', verifyToken, updateStudySet); //update an existing studySet

// Routes for FlashCards
router.post('/studysets/:id/flashcards', verifyToken, addFlashCard); //add a new flashcard manually
router.delete('/studysets/:id/flashcards/:flashCardId', verifyToken, deleteFlashCard); //delete an existing flashcard
router.put('/studysets/:id/flashcards/:flashCardId', verifyToken, updateFlashCard); //update an existing flashcard
router.post('/studysets/:id/flashcards/generate', verifyToken, generateFlashCards); //auto generate flashcards using cohere

export default router;
