import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  margin: 1.5rem;

  strong {
    font-size: 1.8rem;
  }

  p {
    font-size: 1.25rem;
    margin: 2rem 2rem 4rem;
  }

  button {
    background-color: #e0e0e0;
    color: #333;
    border: 2px solid #cbcbcb;
    margin-top: 16px;
    height: 40px;
    font-weight: 300;
    border-radius: 4px;
    width: 120px;
    transition: background-color 0.2s, border-color 0.2s;

    &:hover {
      background-color: ${shade(0.2, '#e0e0e0')};
      border-color: ${shade(0.2, '#cbcbcb')};
    }

    & + button {
      margin-left: 32px;
    }
  }
`;
