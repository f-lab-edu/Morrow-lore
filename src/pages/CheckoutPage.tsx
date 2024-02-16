import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { ROUTES } from '../routes/ManageCenterRotue';
import { getCart } from '../api/cart/getCart';

const StyleCheckout = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  > article {
    width: 50%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > p {
      font-size: 3rem;
      font-weight: 700;
    }
  }
`;

const CheckoutPage: React.FC = () => {
  const [checkout, setCheckout] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const myCart = await getCart();
        setCheckout(myCart.data);
      } catch (error) {
        console.error(error);
      }
    };

    const handleTotalAmount = () =>
      checkout.reduce((total, item) => {
        const price = parseInt(item.product.price);
        const discountRate = parseInt(item.product.sales) / 100;
        const discountedPrice = price - price * discountRate;
        return total + discountedPrice;
      }, 0);

    fetchData();
    setTotalAmount(handleTotalAmount);
  }, [setTotalAmount]);

  const handlePaymentClick = () => {
    navigate(ROUTES.PAYMENT);
  };

  return (
    <StyleCheckout>
      <article>
        <p>{totalAmount} 원</p>
        <article>
          <h2>포인트</h2>
          <input type="number" name="point" id="point" />
        </article>
        <article>
          <h2>쿠폰</h2>
          <input type="text" name="coupon" />
          <div className="couponWrap">
            <input type="radio" name="coupon" id="new" />
            <input type="radio" name="coupon" id="new2" />
            <input type="radio" name="coupon" id="new3" />
          </div>
        </article>
        <button
          onClick={() => {
            handlePaymentClick();
          }}
        >
          결제수단
        </button>
      </article>
    </StyleCheckout>
  );
};

export default CheckoutPage;
