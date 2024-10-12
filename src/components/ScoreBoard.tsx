import React from 'react';

interface ScoreBoardProps {
  score: number;
  total: number;
}

const ScoreBoard: React.FC<ScoreBoardProps> = ({ score, total }) => {
  return (
    <div className="mt-8 text-center">
      <h3 className="text-xl font-semibold text-blue-800">Puntuación</h3>
      <p className="text-2xl font-bold text-blue-900">{score} / {total}</p>
    </div>
  );
};

export default ScoreBoard;