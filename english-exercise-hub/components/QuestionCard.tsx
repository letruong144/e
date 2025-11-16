import React, { useState, useEffect } from 'react';
import { ExerciseQuestion, MultipleChoiceQuestion, WordFormQuestion } from '../types';

interface QuestionCardProps {
  question: ExerciseQuestion;
  onAnswer: (answer: string) => void;
  isAnswered: boolean;
  userAnswer: string;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question, onAnswer, isAnswered, userAnswer }) => {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    setInputValue('');
  }, [question]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAnswer(inputValue);
  };
  
  const renderMultipleChoice = (q: MultipleChoiceQuestion) => {
    return (
      <div className="space-y-3">
        {q.options.map((option, index) => {
          const isSelected = userAnswer === option;
          const isCorrect = q.answer === option;
          let buttonClass = 'w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ';

          if (isAnswered) {
            if (isSelected) {
                if (isCorrect) {
                    buttonClass += 'bg-green-100 border-green-400 text-green-800 font-semibold';
                } else {
                    buttonClass += 'bg-red-100 border-red-400 text-red-800';
                }
            } else {
                buttonClass += 'bg-gray-100 border-gray-300 text-gray-700';
            }
          } else {
            if (isSelected) {
               buttonClass += 'bg-indigo-100 border-indigo-500';
            } else {
               buttonClass += 'bg-white border-gray-300 hover:bg-indigo-50 hover:border-indigo-400';
            }
          }

          return (
            <button key={index} onClick={() => onAnswer(option)} disabled={isAnswered} className={buttonClass}>
              <span className="font-bold mr-2">{String.fromCharCode(65 + index)}.</span>
              {option}
              {isAnswered && isSelected && (
                isCorrect 
                ? <i className="fas fa-check-circle text-green-600 float-right mt-1"></i>
                : <i className="fas fa-times-circle text-red-600 float-right mt-1"></i>
              )}
            </button>
          );
        })}
      </div>
    );
  };
  
  const renderWordForm = (q: WordFormQuestion) => {
    const isCorrect = q.answer.toLowerCase() === userAnswer.toLowerCase().trim();
    
    return (
        <form onSubmit={handleInputSubmit}>
            <div className="flex flex-col sm:flex-row items-center gap-4">
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    disabled={isAnswered}
                    placeholder={`Use the correct form of "${q.baseWord}"`}
                    className={`flex-grow w-full px-4 py-3 border-2 rounded-lg focus:outline-none ${isAnswered ? (isCorrect ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50') : 'border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500'}`}
                />
                {!isAnswered && (
                    <button type="submit" className="w-full sm:w-auto bg-indigo-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-600 transition-colors duration-300">
                        Submit
                    </button>
                )}
            </div>
            {isAnswered && (
                <div className={`mt-3 text-sm font-semibold ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                    {isCorrect ? (
                        <span><i className="fas fa-check-circle mr-2"></i>Correct!</span>
                    ) : (
                        <span><i className="fas fa-times-circle mr-2"></i>Incorrect!</span>
                    )}
                </div>
            )}
        </form>
    );
  };

  return (
    <div className="animate-fade-in-up">
      <p className="text-lg sm:text-xl font-medium text-gray-700 mb-6 leading-relaxed" dangerouslySetInnerHTML={{ __html: question.question }}></p>
      {question.type === 'multiple-choice' ? renderMultipleChoice(question) : renderWordForm(question)}
    </div>
  );
};

export default QuestionCard;