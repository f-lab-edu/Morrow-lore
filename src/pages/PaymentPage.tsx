import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ROUTES } from '../routes/ManageCenterRotue';

const StylePayment = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const PaymentPage: React.FC = () => {
  const navigate = useNavigate();

  const handleCompletedPayment = () => {
    navigate(ROUTES.ORDERCOMPLETE);
  };

  return (
    <StylePayment>
      <h1>결제수단</h1>
      <ul>
        <li>
          <button onClick={() => handleCompletedPayment()}>간편결제</button>
        </li>
        <li>
          <button onClick={() => handleCompletedPayment()}>계좌</button>
        </li>
        <li>
          <button onClick={() => handleCompletedPayment()}>카드</button>
        </li>
      </ul>
    </StylePayment>
  );
};

export default PaymentPage;
