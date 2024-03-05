import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../api/context/CartContext';
import { toast } from 'react-toastify';

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

const StyledCartInputWrap = styled.div`
  display: flex;
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
  const { cartItems, addProductToCart, removeProductFromCart } = useCart();
  const [selectedItems, setSelectedItems] = useState<{ [id: number]: boolean }>(
    {},
  );

  useEffect(() => {
    const initialSelectedItems = cartItems.reduce(
      (acc, item) => ({
        ...acc,
        [item.id]: true,
      }),
      {},
    );
    setSelectedItems(initialSelectedItems);
  }, [cartItems]);

  const handleCheckboxChange = (id: number) => {
    setSelectedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const removeItemWithToast = (productId: number) => {
    removeProductFromCart(productId);
    toast('상품이 제거되었습니다.');
  };

  const calculatedTotalAmount = cartItems.reduce((acc, item) => {
    if (selectedItems[item.id]) {
      return acc + item.price * item.quantity * (1 - item.sales / 100);
    }
    return acc;
  }, 0);

  return (
    <StyledCartWrap>
      <StyledCartTitle>장바구니</StyledCartTitle>
      <StyledCartListWrap>
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <StyledCartItem key={`${item.id}-${index}`}>
              <StyledCartInputWrap>
                <input
                  type="checkbox"
                  name="cartlist"
                  checked={selectedItems[item.id] ?? false}
                  onChange={() => handleCheckboxChange(item.id)}
                  id={`${item.id}-${index}`}
                />
              </StyledCartInputWrap>
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
                <CartButton onClick={() => removeItemWithToast(item.id)}>
                  제거
                </CartButton>
              </div>
            </StyledCartItem>
          ))
        ) : (
          <li>상품 정보가 없습니다.</li>
        )}
      </StyledCartListWrap>
      <StyledCartTotalPrice>
        총 가격: {calculatedTotalAmount.toLocaleString()}원
      </StyledCartTotalPrice>
      <CartButton onClick={() => navigate('/checkout')}>결제하기</CartButton>
    </StyledCartWrap>
  );
};

export default CartPage;
