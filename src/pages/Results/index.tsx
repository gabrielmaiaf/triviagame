import React from 'react';
import { Link } from 'react-router-dom';

import ReplyQuestion from '../../components/reply-question';

import { useQuiz } from '../../hooks/quiz';

import { Container, ResultsContainer } from './styles';

const Results: React.FC = () => {
  const { results } = useQuiz();

  return (
    <Container>
      <h1>Results</h1>
      <p>
        Your score: {results.filter(result => result.isCorrect === true).length}
        /10
      </p>
      <ResultsContainer>
        {results.map(result => (
          <ReplyQuestion
            key={result.id}
            isCorrect={result.isCorrect}
            question={result.question}
          />
        ))}
      </ResultsContainer>
      <Link to="/">Play again?</Link>
    </Container>
  );
};

export default Results;
