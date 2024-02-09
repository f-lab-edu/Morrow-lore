import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ROUTES } from '../routes/ManageCenterRotue';
import { useAxios } from '../axios/AxiosContext';

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
  const axios = useAxios();

  useEffect(() => {
    try {
      axios
        .get(`/api/cart`)
        .then((response) => {
          const myCart = response.data;
          setCheckout(myCart);
        })
        .catch((error) => console.error('Fetching products failed:', error));
    } catch (error) {
      console.error(error);
    }

    const handleTotalAmount = () =>
      checkout.reduce((total, item) => {
        const price = parseInt(item.product.price);
        const discountRate = parseInt(item.product.sales) / 100;
        const discountedPrice = price - price * discountRate;
        return total + discountedPrice;
      }, 0);

    setTotalAmount(handleTotalAmount);
  }, []);

  const handlePaymentClick = () => {
    navigate(ROUTES.PAYMENT);
  };

  return (
    <StyleCheckout>
      <article>
        <p>{totalAmount} 원</p>
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
