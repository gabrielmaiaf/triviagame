import styled from 'styled-components';

export const ResultsContainer = styled.div`
  text-align: initial;
  margin: 0 32px;
`;

export const Container = styled.div`
  h1 {
    margin-top: 32px;
  }

  p {
    margin: 16px 0 32px;
    font-weight: 400;
  }

  a {
    background-color: #e0e0e0;
    color: #333;
    border: 2px solid #cbcbcb;
    height: 44px;
    font-weight: 300;
    border-radius: 4px;
    text-decoration: none;
    padding: 10px 30px;
    display: inline-block;
    margin: 20px 0;
    transition: all 0.2s;

    &:hover {
      color: #228b22;
      border-color: #228b22;
    }
  }
`;
