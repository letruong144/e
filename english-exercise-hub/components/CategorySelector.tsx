
import React from 'react';
import { ExerciseCategory } from '../types';

interface CategorySelectorProps {
  onSelectCategory: (category: ExerciseCategory) => void;
}

const categories: { key: ExerciseCategory; name: string; description: string; icon: string; }[] = [
  { key: 'meaning', name: 'Ngữ Nghĩa (Meaning)', description: 'Choose the word with the most suitable meaning.', icon: 'fas fa-lightbulb' },
  { key: 'pronunciation', name: 'Phát Âm (Pronunciation)', description: 'Practice pronunciation and stress patterns.', icon: 'fas fa-volume-up' },
  { key: 'sentenceStructure', name: 'Cấu Trúc Câu (Sentence Structure)', description: 'Focus on grammar, gerunds, and clauses.', icon: 'fas fa-sitemap' },
  { key: 'wordForms', name: 'Dạng Từ (Word Forms)', description: 'Use the correct form of the given word.', icon: 'fas fa-pencil-alt' },
];

const CategorySelector: React.FC<CategorySelectorProps> = ({ onSelectCategory }) => {
  return (
    <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg animate-fade-in">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6">Choose a Category</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => onSelectCategory(cat.key)}
            className="group text-left p-5 bg-gray-50 hover:bg-indigo-100 rounded-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 border border-gray-200 hover:border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <div className="flex items-center">
              <div className="bg-indigo-500 text-white rounded-full p-3 mr-4">
                <i className={`${cat.icon} fa-fw`}></i>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-700">{cat.name}</h3>
                <p className="text-sm text-gray-600">{cat.description}</p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategorySelector;
