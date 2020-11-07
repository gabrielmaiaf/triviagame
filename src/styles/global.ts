import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, button {
    font-family: 'Oxygen', sans-serif;
    font-size: 16px;
  }

  h1, h2, h3, strong {
    font-weight: 700;
  }

  button {
    cursor: pointer;
  }
`;
