import express from 'express';
import {
  addStudySet,
  deleteStudySet,
  updateStudySet,
  addFlashCard,
  deleteFlashCard,
  updateFlashCard,
} from '../controllers/studySets.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

// Routes for StudySets
router.post('/studysets', verifyToken, addStudySet);
router.delete('/studysets/:id', verifyToken, deleteStudySet);
router.put('/studysets/:id', verifyToken, updateStudySet);

// Routes for FlashCards
router.post('/studysets/:id/flashcards', verifyToken, addFlashCard);
router.delete('/studysets/:id/flashcards/:flashCardId', verifyToken, deleteFlashCard);
router.put('/studysets/:id/flashcards/:flashCardId', verifyToken, updateFlashCard);

export default router;
