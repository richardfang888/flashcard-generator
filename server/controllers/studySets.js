import StudySet from "../models/StudySet.js";
import FlashCard from "../models/StudySet.js"
import User from "../models/User.js";
import cohere from 'cohere-ai'

//Delete an existing StudySet
export const deleteStudySet = async (req, res, next) => {
  try {
    const studySet = await StudySet.findByIdAndDelete(req.params.id)
    if (!studySet) {
      return res.status(404).json({ success: false, error: 'Study set not found' })
    }
    res.status(200).json({ success: true, data: {} })
  } catch (err) {
    console.error(err)
    res.status(500).json({ success: false, error: 'Server Error' })
  }
};

//Update an existing StudySet
export const updateStudySet = async (req, res, next) => {
  try {
    const studySet = await StudySet.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    })
    if (!studySet) {
      return res.status(404).json({ success: false, error: 'Study set not found' })
    }
    res.status(200).json({ success: true, data: studySet })
  } catch (err) {
    console.error(err)
    res.status(500).json({ success: false, error: 'Server Error' })
  }
};

export const addFlashCard = async (req, res) => {
    const { id } = req.params
    const { question, answer } = req.body
    try {
      const studySet = await StudySet.findById(id)
      const newFlashCard = { question, answer }
      studySet.flashCards.push(newFlashCard)
      const updatedStudySet = await studySet.save()
      res.status(201).json(updatedStudySet)
    } catch (error) {
      res.status(404).json({ message: error.message })
    }
  };
  
  export const deleteFlashCard = async (req, res) => {
    const { id, flashCardId } = req.params
    try {
      const studySet = await StudySet.findById(id)
      studySet.flashCards = studySet.flashCards.filter(
        (flashCard) => flashCard._id.toString() !== flashCardId
      );
      const updatedStudySet = await studySet.save()
      res.status(200).json(updatedStudySet)
    } catch (error) {
      res.status(404).json({ message: error.message })
    }
  };
  
  export const updateFlashCard = async (req, res) => {
    const { id, flashCardId } = req.params;
    const { question, answer } = req.body;
    try {
      const studySet = await StudySet.findById(id);
      const flashCardToUpdate = studySet.flashCards.find(
        (flashCard) => flashCard._id.toString() === flashCardId
      )
      if (flashCardToUpdate) {
        flashCardToUpdate.question = question || flashCardToUpdate.question
        flashCardToUpdate.answer = answer || flashCardToUpdate.answer
        const updatedStudySet = await studySet.save()
        res.status(200).json(updatedStudySet)
      } else {
        res.status(404).json({ message: 'Flashcard not found' })
      }
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };
  
  //Add a new StudySet
  export const addStudySet = async (req, res, next) => {
    try {
      const { userId, title } = req.body
      const newStudySet = new StudySet ({ userId, title })
      const savedSet = await newStudySet.save()
      console.log(savedSet)
      res.status(201).json(savedSet)
    } catch (err) {
      console.error(err)
      res.status(500).json({ message: err.message })
    }
  };

  //generate flashcards using Cohere AI
  cohere.init('M5HQvvV8KR5K9o8U5THd65iMsSJFf0y8SD8mBJpp')

  export const generateFlashCards = async (req, res) => {
    try {
      console.log(req.body)
      const { userId, title, notes } = req.body
      const newStudySet = new StudySet ({ userId, title })
      const saveStudySet = await newStudySet.save()
      const response = await cohere.generate({
        model: 'command-xlarge-nightly',
        prompt: `Please make flashcards out of the following information, in this format: one sentence that is a question, followed by one sentence that is the answer to that question. make it in digestible chunks, and make however many flashcards you feel appropriate.\n\n ${notes}`,
        max_tokens: 300,
        temperature: 0.2,
        k: 0,
        stop_sequences: [],
        return_likelihoods: 'NONE'
      });

      if (!response.body.generations) {
        throw new Error('Failed to retrieve response data');
      }
      
      const generations = response.body.generations[0].text.trim().split('\n\n');
      const result = [];

      for (const generation of generations) {
        const [prompt, text] = generation.split('\n');
        if (prompt && text) {
          result.push({ question: prompt, answer: text });
        }
      }
      const tempSet = []
      //flashcards generated in json form { question, answer }
      result.forEach((generatedFlashCard) => {
        // Create a new flashcard object
        const newFlashCard = new FlashCard({
          ...generatedFlashCard,
          status: 'New',
        });
        
        // Add the new flashcard to the flashCards array
        tempSet.flashCards.push(newFlashCard);
      })
      saveStudySet = await [...saveStudySet, tempSet].save()
      res.status(201).json(saveStudySet)
    }
    catch (error) {
      res.status(404).json({ message: error.message })
    }
  }
  
  
  
  
  