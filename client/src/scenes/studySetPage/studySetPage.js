import axios from 'axios';
import { useEffect, useState } from 'react';
import {Flashcard} from 'react-quizlet-flashcard';

function Flash() {
  const [flashcards, setFlashcards] = useState([]);

  const [newQuestion, setNewQuestion] = useState('');
  const [newAnswer, setNewAnswer] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFlashcard = {

      question: newQuestion,
      answer: newAnswer,
    };

    useEffect(() => {
        // Fetch flashcards data from server when component mounts
        const fetchFlashcards = async () => {
          try {
            const response = await axios.get('/api/flashcards'); // Make a GET request to your server endpoint for fetching flashcards
            setFlashcards(response.data);
            setNewQuestion(response.data);
            setNewAnswer(response.data);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchFlashcards();
      }, []);


    setFlashcards([...flashcards, newFlashcard]);

    setNewQuestion('');
    setNewAnswer('');
  };

  return (
    <div>
      <Flashcard flashcards={flashcards} />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter question"
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter answer"
          value={newAnswer}
          onChange={(e) => setNewAnswer(e.target.value)}
        />
        <button type="submit">Add flashcard</button>
      </form>
    </div>
  );


}

export default Flash;