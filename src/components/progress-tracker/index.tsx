import React from 'react';

import { Container } from './styles';

const ProgressTracker: React.FC<{ value: number }> = ({ value }) => (
  <Container value={value} max={10} />
);

export default ProgressTracker;
