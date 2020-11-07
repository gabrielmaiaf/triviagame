import React from 'react';

import { Container } from './styles';

import { QuestionsState } from '../../hooks/quiz';

interface Props {
  answer(question: string, answer: boolean): void;
  question: QuestionsState;
}

const Question: React.FC<Props> = ({ question, answer }) => {
  return (
    <Container>
      <strong>{question.category}</strong>
      <p dangerouslySetInnerHTML={{ __html: question.question }} />
      <button type="button" onClick={() => answer(question.question, true)}>
        True
      </button>
      <button type="button" onClick={() => answer(question.question, false)}>
        False
      </button>
    </Container>
  );
};

export default Question;
