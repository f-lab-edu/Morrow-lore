import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../api/context/CartContext';
import { useQueryClient } from '@tanstack/react-query';

const StyledCartWrap = styled.section`
  width: 100%;
  height: 100vh;
  padding: 53px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const StyledCartTitle = styled.h2`
  font-size: 1.6rem;
  color: rgb(29, 29, 31, 0.9);
`;

const StyledCartListWrap = styled.ul`
  width: 80%;
  max-width: 800px;
  height: 400px;
  overflow: auto;
  border: 1px solid rgb(29, 29, 31, 0.15);
  border-radius: 7px;
  list-style: none;
  padding: 0;
`;

const StyledCartItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid rgb(29, 29, 31, 0.15);

  &:last-child {
    border-bottom: none;
  }
`;

const StyledCartContentWrap = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 60px;
    height: 60px;
    margin-right: 1rem;
  }
`;

const StyledCartPrice = styled.p`
  font-weight: 600;
`;

const StyledCartTotalPrice = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
`;

const CartButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  margin: 0 5px;

  &:hover {
    background-color: #0056b3;
  }
`;

const CartPage: React.FC = () => {
  const navigate = useNavigate();
  const { cartItems, totalAmount, addProductToCart, removeProductFromCart } =
    useCart();

  return (
    <StyledCartWrap>
      <StyledCartTitle>장바구니</StyledCartTitle>
      <StyledCartListWrap>
        {cartItems.map((item, index) => (
          <StyledCartItem key={`${item.id}-${index}`}>
            <StyledCartContentWrap>
              <img src={item.photo} alt={item.name} />
              <div>
                <p>{item.name}</p>
                <StyledCartPrice>가격: {item.price}원</StyledCartPrice>
                <p>수량: {item.quantity}</p>
              </div>
            </StyledCartContentWrap>
            <div>
              <CartButton onClick={() => addProductToCart(item)}>
                추가
              </CartButton>
              <CartButton onClick={() => removeProductFromCart(item.id)}>
                제거
              </CartButton>
            </div>
          </StyledCartItem>
        ))}
      </StyledCartListWrap>
      <StyledCartTotalPrice>총 가격: {totalAmount}원</StyledCartTotalPrice>
      <CartButton onClick={() => navigate('/checkout')}>결제하기</CartButton>
    </StyledCartWrap>
  );
};

export default CartPage;
