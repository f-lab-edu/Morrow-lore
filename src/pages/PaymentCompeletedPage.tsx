import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../routes/ManageCenterRotue';

const StyleOrderComplete = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  > p {
    font-weight: 700;
    font-size: 3rem;
  }
`;

const PaymentCompeletedPage: React.FC = () => {
  const navigate = useNavigate();

  const handleGoToHome = () => {
    navigate(ROUTES.HOME);
  };

  const handleGoToProducts = () => {
    navigate(ROUTES.PRODUCTS);
  };

  return (
    <StyleOrderComplete>
      <p>주문이 완료되었습니다!</p>
      <button
        onClick={() => {
          handleGoToHome();
        }}
      >
        홈
      </button>
      <button
        onClick={() => {
          handleGoToProducts();
        }}
      >
        상품 더보기
      </button>
    </StyleOrderComplete>
  );
};

export default PaymentCompeletedPage;
