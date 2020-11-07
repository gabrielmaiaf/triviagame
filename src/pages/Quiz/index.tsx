import React, { useState, useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Question from '../../components/question';
import ProgressTracker from '../../components/progress-tracker';

import { useQuiz, AnswersData } from '../../hooks/quiz';

import { capitalizeBoolean } from '../../utils/string-helpers';

const Quiz: React.FC = () => {
  const { questions, setUserAnswers } = useQuiz();
  const [answers, setAnswers] = useState<AnswersData[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const history = useHistory();

  useEffect(() => {
    if (answers.length === 10) {
      setUserAnswers(answers);
      history.push('/result');
    }
  }, [answers, setUserAnswers, history]);

  const handleAnswer = useCallback(
    (question, answer) => {
      const isCorrect =
        questions[currentQuestion].correct_answer === capitalizeBoolean(answer);

      setAnswers(state => [
        ...state,
        {
          id: currentQuestion,
          question,
          isCorrect,
          answer: questions[currentQuestion].correct_answer,
        },
      ]);

      if (currentQuestion !== questions.length - 1)
        setCurrentQuestion(state => state + 1);
    },
    [currentQuestion, questions],
  );

  return (
    <>
      <ProgressTracker value={currentQuestion + 1} />
      <Question answer={handleAnswer} question={questions[currentQuestion]} />
      <span>{`${currentQuestion + 1} of ${questions.length}`}</span>
    </>
  );
};

export default Quiz;
