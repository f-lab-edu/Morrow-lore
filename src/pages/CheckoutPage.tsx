import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { ROUTES } from '../routes/ManageCenterRotue';
import { useCart } from '../context/CartContext';

const StyleCheckout = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledCheckoutContent = styled.article`
  width: 50%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledCheckoutfont = styled.p`
  font-size: 3rem;
  font-weight: 700;
`;

const CheckoutPage: React.FC = () => {
  const { totalAmount } = useCart();
  const navigate = useNavigate();

  const handlePaymentClick = () => {
    navigate(ROUTES.PAYMENT);
  };

  return (
    <StyleCheckout>
      <StyledCheckoutContent>
        <StyledCheckoutfont>
          총액: {totalAmount.toLocaleString()} 원
        </StyledCheckoutfont>
        <StyledCheckoutContent>
          <h2>포인트</h2>
          <input type="number" name="point" id="point" />
        </StyledCheckoutContent>
        <StyledCheckoutContent>
          <h2>쿠폰</h2>
          <input type="text" name="coupon" />
          <div className="couponWrap">
            <input type="radio" name="coupon" id="new" />
            <input type="radio" name="coupon" id="new2" />
            <input type="radio" name="coupon" id="new3" />
          </div>
        </StyledCheckoutContent>
        <button
          onClick={() => {
            handlePaymentClick();
          }}
        >
          결제수단
        </button>
      </StyledCheckoutContent>
    </StyleCheckout>
  );
};

export default CheckoutPage;
