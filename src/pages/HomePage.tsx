import React from 'react';
import styled from 'styled-components';

import Carousel from '../components/slider/Carousel';

const StyleMain = styled.main`
  width: 100%;
  height: 100%;
`;

const StyleSection = styled.section`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  overflow: hidden;
`;

const HomePage: React.FC = () => {
  return (
    <StyleMain>
      <StyleSection>
        <Carousel />
      </StyleSection>
    </StyleMain>
  );
};

export default HomePage;
