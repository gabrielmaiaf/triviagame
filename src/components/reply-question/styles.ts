import styled from 'styled-components';

interface ContainerProps {
  isCorrect: boolean;
}

export const Container = styled.div<ContainerProps>`
  color: ${props => (props.isCorrect ? '#333' : '#c53030')};

  svg {
    color: ${props => (props.isCorrect ? '#228b22' : '#c53030')};
    margin-right: 8px;

    polyline,
    path {
      stroke: inherit;
    }
  }

  strong {
    font-weight: ${props => (props.isCorrect ? 300 : 700)};
  }
`;
