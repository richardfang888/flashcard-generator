import express from 'express';
import {
  addStudySet,
  deleteStudySet,
  updateStudySet,
  addFlashCard,
  deleteFlashCard,
  updateFlashCard,
} from '../controllers/studySetController.js';

const router = express.Router();

// Routes for StudySets
router.post('/studysets', addStudySet);
router.delete('/studysets/:id', deleteStudySet);
router.put('/studysets/:id', updateStudySet);

// Routes for FlashCards
router.post('/studysets/:id/flashcards', addFlashCard);
router.delete('/studysets/:id/flashcards/:flashCardId', deleteFlashCard);
router.put('/studysets/:id/flashcards/:flashCardId', updateFlashCard);

export default router;
