import styled, { css } from 'styled-components';
import { shade } from 'polished';

import WoodBackground from '../../assets/application-background.jpg';

interface ButtonProps {
  isSelected: boolean;
}

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
  background: url(${WoodBackground});
  background-size: cover;
`;

export const QuizContainer = styled.div`
  p {
    margin: 8px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 8px 0;
  }

  button {
    width: 300px;
    font-size: 1.2rem;
    border-radius: 4px;
  }

  h1 {
    font-size: 2.5rem;
    margin-bottom: 16px;
  }
`;

export const StartQuiz = styled.button`
  background-color: #e0e0e0;
  color: #228b22;
  border: 2px solid #228b22;
  margin-top: 16px;
  height: 40px;
  font-weight: 700;
  transition: color 0.2s, border-color 0.2s;

  &:hover {
    color: ${shade(0.2, '#228b22')};
    border-color: ${shade(0.2, '#228b22')};
  }
`;

export const LevelButton = styled.button<ButtonProps>`
  background-color: #e0e0e0;
  color: #333;
  border: 2px solid #cbcbcb;
  transition: color 0.2s;

  ${props =>
    props.isSelected &&
    css`
      border-color: #33a532;
      color: #33a532;
    `}

  &:hover {
    color: ${props => shade(0.3, props.isSelected ? '#33a532' : '#cbcbcb')};
  }

  & + button {
    margin-top: 8px;
  }
`;
