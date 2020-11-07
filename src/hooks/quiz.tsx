import React, { createContext, useCallback, useContext, useState } from 'react';

import api from '../services/api';

export interface QuestionsState {
  category: string;
  question: string;
  difficulty: 'easy' | 'medium' | 'hard';
  correct_answer: string;
}

export interface AnswersData {
  id: number;
  question: string;
  isCorrect: boolean;
  answer: string;
}

interface QuizContextData {
  questions: QuestionsState[];
  results: AnswersData[];
  getQuiz(difficulty: 'easy' | 'medium' | 'hard'): Promise<void>;
  setUserAnswers(answers: AnswersData[]): void;
}

const QuizContext = createContext<QuizContextData>({} as QuizContextData);

const QuizProvider: React.FC = ({ children }) => {
  const [questions, setQuestions] = useState<QuestionsState[]>([]);
  const [userResults, setUserResults] = useState<AnswersData[]>([]);

  const getQuiz = useCallback(async difficulty => {
    const response = await api.get(
      `api.php?amount=10&difficulty=${difficulty}&type=boolean`,
    );

    const { results } = response.data;

    setQuestions(results);
  }, []);

  const setUserAnswers = useCallback((answers: AnswersData[]) => {
    setUserResults(answers);
  }, []);

  return (
    <QuizContext.Provider
      value={{ questions, results: userResults, getQuiz, setUserAnswers }}
    >
      {children}
    </QuizContext.Provider>
  );
};

function useQuiz(): QuizContextData {
  const context = useContext(QuizContext);

  if (!context) {
    throw new Error('useQuiz must be used within an QuizProvider');
  }

  return context;
}

export { QuizProvider, useQuiz };
