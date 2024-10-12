import React from 'react';
import { BibleBook } from '../utils/gameLogic';

interface GameBoardProps {
  question: BibleBook;
  onAnswer: (isCorrect: boolean) => void;
}

const GameBoard: React.FC<GameBoardProps> = ({ question, onAnswer }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
      <h2 className="text-xl font-semibold mb-4 text-center">{question.name}</h2>
      <p className="text-gray-700 mb-6 text-center">{question.description}</p>
      <div className="flex justify-center space-x-4">
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
          onClick={() => onAnswer(question.isCorrect)}
        >
          Verdadero
        </button>
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
          onClick={() => onAnswer(!question.isCorrect)}
        >
          Falso
        </button>
      </div>
    </div>
  );
};

export default GameBoard;