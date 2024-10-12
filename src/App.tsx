import React, { useState, useEffect } from 'react';
import { Book } from 'lucide-react';
import Confetti from 'react-confetti';
import GameBoard from './components/GameBoard';
import ScoreBoard from './components/ScoreBoard';
import { BibleBook, generateQuestions } from './utils/gameLogic';

const App: React.FC = () => {
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState<BibleBook[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    setQuestions(generateQuestions(10));
  }, []);

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 1);
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);
    }
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-300 flex flex-col items-center justify-center p-4">
      {showConfetti && <Confetti />}
      <header className="mb-8 text-center">
        <Book className="inline-block text-blue-600 mb-2" size={48} />
        <h1 className="text-3xl font-bold text-blue-800">Juego de Memoria Bíblico: Verdadero o Falso</h1>
      </header>
      {currentQuestionIndex < questions.length ? (
        <GameBoard
          question={questions[currentQuestionIndex]}
          onAnswer={handleAnswer}
        />
      ) : (
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">¡Juego Terminado!</h2>
          <p className="text-xl">Tu puntuación final: {score} / {questions.length}</p>
          <button
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              setQuestions(generateQuestions(10));
              setCurrentQuestionIndex(0);
              setScore(0);
            }}
          >
            Jugar de Nuevo
          </button>
        </div>
      )}
      <ScoreBoard score={score} total={questions.length} />
    </div>
  );
};

export default App;