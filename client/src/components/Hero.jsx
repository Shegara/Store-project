import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 1.8rem;
  background-color: teal;
  color: white;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: 500;
`;

const Hero = () => {
  return (
    <Container>
      Free shipping for orders over $50!
    </Container>
  );
};

export default Hero;