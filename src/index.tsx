import React from 'react';
import styled from 'styled-components';

const Hello = styled.h1`
  font-size: 150px;
  color: blue;
`;

const App: React.FC = () => {
  return (
    <Hello>HELLO PARCEL!</Hello>
  );
};

export { App };