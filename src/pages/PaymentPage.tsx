import React from 'react';
import { useAxios } from '../axios/axiosContext';
import styled from 'styled-components';

const StyleMain = styled.main`
  width: 100%;
  height: 100%;
`;

const StyleSection = styled.section`
  width: 90%;
  height: 85vh;
  margin: 0 auto;
  background-color: rgb(126, 99, 99, 0.3);
`;

const PaymentPage: React.FC = () => {
  const axios = useAxios();
  return (
    <StyleMain>
      <StyleSection />
    </StyleMain>
  );
};

export default PaymentPage;
