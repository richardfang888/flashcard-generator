import { useState } from 'react';
import Flashcard from 'react-quizlet-flashcard';

function Flash() {
  const [flashcards, setFlashcards] = useState([
    {
      front: 'What is the capital of France?',
      back: 'Paris',
    },
    {
      front: 'What is the largest continent in the world?',
      back: 'Asia',
    },
    {
      front: 'Who is the founder of SpaceX?',
      back: 'Elon Musk',
    },
  ]);

  const [newQuestion, setNewQuestion] = useState('');
  const [newAnswer, setNewAnswer] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFlashcard = {
      front: newQuestion,
      back: newAnswer,
    };

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
