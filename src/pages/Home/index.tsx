import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useQuiz } from '../../hooks/quiz';

import { LevelButton, QuizContainer, StartQuiz } from './styles';

const Home: React.FC = () => {
  const { getQuiz } = useQuiz();
  const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard'>(
    'easy',
  );
  const history = useHistory();

  const handleSubmit = useCallback(async () => {
    try {
      await getQuiz(difficulty);

      history.push('/quiz');
    } catch (err) {
      console.error(err);
    }
  }, [difficulty, getQuiz, history]);

  return (
    <QuizContainer>
      <h1>Welcome to the Trivia Challenge!</h1>
      <p>You will be presented with 10 True or False questions.</p>
      <strong>Are you capable to score 100% in hard difficulty?</strong>
      <p>Select quiz level:</p>
      <div>
        <LevelButton
          type="button"
          onClick={() => setDifficulty('easy')}
          isSelected={difficulty === 'easy'}
        >
          Easy
        </LevelButton>
        <LevelButton
          type="button"
          onClick={() => setDifficulty('medium')}
          isSelected={difficulty === 'medium'}
        >
          Medium
        </LevelButton>
        <LevelButton
          type="button"
          onClick={() => setDifficulty('hard')}
          isSelected={difficulty === 'hard'}
        >
          Hard
        </LevelButton>
      </div>
      <StartQuiz type="button" onClick={handleSubmit}>
        Begin
      </StartQuiz>
    </QuizContainer>
  );
};

export default Home;
