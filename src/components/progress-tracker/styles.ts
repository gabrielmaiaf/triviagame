import styled from 'styled-components';

export const Container = styled.progress`
  position: absolute;
  top: 0;
  width: 100%;
  background: #cbcbcb;
  appearance: none;

  &::-webkit-progress-bar {
    background: #cbcbcb;
  }

  &::-webkit-progress-value {
    background: #228b22;
  }
`;
