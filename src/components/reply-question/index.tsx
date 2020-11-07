import React from 'react';
import { GrCheckmark, GrClose } from 'react-icons/gr';

import { Container } from './styles';

interface ReplyProps {
  isCorrect: boolean;
  question: string;
}

const ReplyQuestion: React.FC<ReplyProps> = ({ isCorrect, question }) => {
  return (
    <Container isCorrect={isCorrect}>
      {isCorrect ? <GrCheckmark size={13} /> : <GrClose size={13} />}
      <strong dangerouslySetInnerHTML={{ __html: question }} />
    </Container>
  );
};

export default ReplyQuestion;
