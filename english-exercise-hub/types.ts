
export type ExerciseCategory = 'meaning' | 'pronunciation' | 'sentenceStructure' | 'wordForms';

export interface BaseQuestion {
  id: number;
  question: string;
}

export interface MultipleChoiceQuestion extends BaseQuestion {
  type: 'multiple-choice';
  options: string[];
  answer: string;
}

export interface WordFormQuestion extends BaseQuestion {
  type: 'word-form';
  baseWord: string;
  answer: string;
}

export type ExerciseQuestion = MultipleChoiceQuestion | WordFormQuestion;
