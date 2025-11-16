
import React, { useState } from 'react';
import { exercisesData } from './data/exercises';
import { ExerciseCategory, ExerciseQuestion } from './types';
import CategorySelector from './components/CategorySelector';
import ExerciseScreen from './components/ExerciseScreen';
import ResultsScreen from './components/ResultsScreen';

const App: React.FC = () => {
  const [currentCategory, setCurrentCategory] = useState<ExerciseCategory | null>(null);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [showResults, setShowResults] = useState<boolean>(false);

  const handleSelectCategory = (category: ExerciseCategory) => {
    setCurrentCategory(category);
    setUserAnswers(new Array(exercisesData[category].length).fill(''));
    setShowResults(false);
  };

  const handleQuizComplete = (finalAnswers: string[]) => {
    setUserAnswers(finalAnswers);
    setShowResults(true);
  };

  const handleRestart = () => {
    setCurrentCategory(null);
    setUserAnswers([]);
    setShowResults(false);
  };
  
  const handleBackToCategories = () => {
    setCurrentCategory(null);
    setUserAnswers([]);
    setShowResults(false);
  };

  const renderContent = () => {
    if (showResults && currentCategory) {
      return (
        <ResultsScreen
          questions={exercisesData[currentCategory]}
          userAnswers={userAnswers}
          onRestart={handleRestart}
          onBackToCategories={handleBackToCategories}
        />
      );
    }

    if (currentCategory) {
      return (
        <ExerciseScreen
          questions={exercisesData[currentCategory]}
          onComplete={handleQuizComplete}
          categoryTitle={currentCategory.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
          onBack={handleBackToCategories}
        />
      );
    }

    return <CategorySelector onSelectCategory={handleSelectCategory} />;
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 flex flex-col items-center p-4 sm:p-6 lg:p-8">
      <header className="w-full max-w-4xl text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-indigo-600 flex items-center justify-center gap-3">
            <i className="fas fa-book-open"></i> English Exercise Hub
        </h1>
        <p className="text-slate-600 mt-2 text-lg">Hone your English skills with interactive exercises.</p>
      </header>
      <main className="w-full max-w-4xl">
        {renderContent()}
      </main>
    </div>
  );
};

export default App;
