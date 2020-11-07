import styled from 'styled-components';

import WoodBackground from '../../assets/application-background.jpg';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
  background: url(${WoodBackground});
  background-size: cover;
`;

export const Card = styled.div`
  position: relative;
  background-color: #fcfff9;
  max-width: 700px;
  width: 100%;
  min-height: 500px;
  color: #312e38;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  margin: auto;
`;
