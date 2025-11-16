
import React, { useState, useEffect } from 'react';
import { ExerciseQuestion } from '../types';
import QuestionCard from './QuestionCard';
import ProgressBar from './ProgressBar';

interface ExerciseScreenProps {
  questions: ExerciseQuestion[];
  onComplete: (answers: string[]) => void;
  categoryTitle: string;
  onBack: () => void;
}

const ExerciseScreen: React.FC<ExerciseScreenProps> = ({ questions, onComplete, categoryTitle, onBack }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<string[]>(new Array(questions.length).fill(''));
  const [isAnswered, setIsAnswered] = useState(false);

  const handleAnswer = (answer: string) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentIndex] = answer;
    setUserAnswers(newAnswers);
    setIsAnswered(true);
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsAnswered(false);
    } else {
      onComplete(userAnswers);
    }
  };

  const currentQuestion = questions[currentIndex];

  return (
    <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg w-full">
        <div className="flex justify-between items-center mb-4">
            <button onClick={onBack} className="text-indigo-600 hover:text-indigo-800 transition duration-300">
                <i className="fas fa-arrow-left mr-2"></i>Back to Categories
            </button>
            <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-800">{categoryTitle}</h2>
            <div className="w-32"></div>
        </div>

      <ProgressBar current={currentIndex + 1} total={questions.length} />
      
      <div className="mt-6">
        <QuestionCard
          key={currentQuestion.id}
          question={currentQuestion}
          onAnswer={handleAnswer}
          isAnswered={isAnswered}
          userAnswer={userAnswers[currentIndex]}
        />
      </div>

      <div className="mt-8 text-right">
        <button
          onClick={handleNext}
          disabled={!isAnswered}
          className="bg-indigo-600 text-white font-bold py-3 px-8 rounded-lg shadow-md hover:bg-indigo-700 transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed transform disabled:scale-100 hover:scale-105"
        >
          {currentIndex < questions.length - 1 ? 'Next' : 'Finish Quiz'}
          <i className="fas fa-arrow-right ml-2"></i>
        </button>
      </div>
    </div>
  );
};

export default ExerciseScreen;
