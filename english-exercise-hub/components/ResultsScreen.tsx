import React from 'react';
import { ExerciseQuestion } from '../types';

interface ResultsScreenProps {
  questions: ExerciseQuestion[];
  userAnswers: string[];
  onRestart: () => void;
  onBackToCategories: () => void;
}

const ResultsScreen: React.FC<ResultsScreenProps> = ({ questions, userAnswers, onRestart, onBackToCategories }) => {
  const correctAnswers = questions.filter((q, i) => {
    if (q.type === 'word-form') {
        return q.answer.toLowerCase() === userAnswers[i].toLowerCase().trim();
    }
    return q.answer === userAnswers[i];
  }).length;
  
  const score = Math.round((correctAnswers / questions.length) * 100);

  const getScoreColor = () => {
    if (score >= 80) return 'text-green-500';
    if (score >= 50) return 'text-yellow-500';
    return 'text-red-500';
  }

  return (
    <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg w-full animate-fade-in">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Quiz Results</h2>
      <div className="text-center mb-8">
        <p className="text-lg text-gray-600">You scored</p>
        <p className={`text-6xl font-bold my-2 ${getScoreColor()}`}>{score}%</p>
        <p className="text-lg text-gray-600">{correctAnswers} out of {questions.length} correct</p>
      </div>
      
      <div className="space-y-4 mb-8 max-h-96 overflow-y-auto pr-2">
        {questions.map((question, index) => {
          const userAnswer = userAnswers[index];
          const isCorrect = question.type === 'word-form' ? userAnswer.toLowerCase().trim() === question.answer.toLowerCase() : userAnswer === question.answer;

          return (
            <div key={question.id} className={`p-4 rounded-lg border-l-4 ${isCorrect ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50'}`}>
              <p className="font-semibold text-gray-800" dangerouslySetInnerHTML={{ __html: question.question }}></p>
              <div className="mt-2 text-sm">
                <p className={` ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                  Your answer: <span className="font-bold">{userAnswer || 'No answer'}</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
        <button
          onClick={onBackToCategories}
          className="bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105"
        >
          <i className="fas fa-layer-group mr-2"></i>Choose New Category
        </button>
        <button
          onClick={onRestart}
          className="bg-gray-700 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
        >
          <i className="fas fa-redo-alt mr-2"></i>Start Over
        </button>
      </div>
    </div>
  );
};

export default ResultsScreen;