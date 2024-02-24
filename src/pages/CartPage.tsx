import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../routes/ManageCenterRotue';
import CreatedUUID from '../components/utility/CreatedUUID';

const StyledCartWrap = styled.section`
  width: 100%;
  height: 100vh;
  padding: 53px 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;

const StyledCartTitle = styled.h2`
  font-size: 1.6rem;
  color: rgb(29, 29, 31, 0.9);
`;

const StyledCartListWrap = styled.ul`
  width: auto;
  height: 400px;
  overflow: auto;
  border: 1px solid rgb(29, 29, 31, 0.15);
  border-radius: 7px;

  li {
    width: 100%;
    display: flex;
    align-items: top;
    justify-content: center;
    padding: 1rem;
    border-bottom: 1px solid rgb(29, 29, 31, 0.15);
  }
`;

const StyledCartInputWrap = styled.div`
  position: relative;
`;

const StyledCartContentWrap = styled.div`
  display: flex;

  img {
    width: 10%;
    margin: 0 1rem;
  }
`;

const StyledCartPrice = styled.p`
  font-weight: 600;
`;

const StyledCartTotalPrice = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
`;

const CartPage: React.FC = () => {
  const [carts, setCarts] = useState([]);
  const [selectedItems, setSelectedItems] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/cart`);
        const cartItems = await response.json();
        const aggregatedItems = aggregateCartItems(cartItems);
        setCarts(aggregatedItems);

        const initialSelectedItems = aggregatedItems.reduce((acc, item) => {
          acc[item.id] = item.price * item.quantity;
          return acc;
        }, {});
        setSelectedItems(initialSelectedItems);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const removeItemFromCart = (id) => {
    const filteredCarts = carts.filter((item) => item.id !== id);
    setCarts(filteredCarts);

    const newSelectedItems = { ...selectedItems };
    delete newSelectedItems[id];
    setSelectedItems(newSelectedItems);
  };

  const aggregateCartItems = (items) => {
    const productMap = new Map();

    items.forEach((item) => {
      if (productMap.has(item.id)) {
        const existingItem = productMap.get(item.id);
        productMap.set(item.id, {
          ...item,
          quantity: existingItem.quantity + 1,
          price: existingItem.price + item.price,
        });
      } else {
        productMap.set(item.id, { ...item, quantity: 1 });
      }
    });

    return Array.from(productMap.values());
  };

  const handleCheckboxChange = (id, isChecked, price, quantity) => {
    setSelectedItems((prev) => {
      const newSelectedItems = { ...prev };
      if (isChecked) {
        newSelectedItems[id] = price * quantity;
      } else {
        delete newSelectedItems[id];
      }
      return newSelectedItems;
    });
  };

  const calculateTotalPrice = () => {
    return Object.values(selectedItems).reduce(
      (total, price) => total + price,
      0,
    );
  };

  const handleCheckoutClick = () => {
    navigate(ROUTES.CHECKOUT);
  };

  return (
    <StyledCartWrap>
      <StyledCartTitle>장바구니 조회</StyledCartTitle>
      <CreatedUUID></CreatedUUID>
      <StyledCartListWrap>
        {carts.length > 0 ? (
          carts.map((product) => (
            <li key={product.id}>
              <StyledCartInputWrap>
                <input
                  type="checkbox"
                  name="cart"
                  id={`cart_${product.id}`}
                  defaultChecked={true}
                  onChange={(e) =>
                    handleCheckboxChange(
                      product.id,
                      e.target.checked,
                      product.price,
                      product.quantity,
                    )
                  }
                />
                <label htmlFor={`cart_${product.id}`}></label>
              </StyledCartInputWrap>
              <StyledCartContentWrap>
                <img src={product.photo} alt={product.name} />
                <p>{`${product.name} (수량: ${product.quantity})`}</p>
              </StyledCartContentWrap>
              <StyledCartPrice>
                가격: {new Intl.NumberFormat().format(product.price)}원
              </StyledCartPrice>
              <button onClick={() => removeItemFromCart(product.id)}>
                제거
              </button>
            </li>
          ))
        ) : (
          <p>장바구니에 담긴 상품이 없습니다.</p>
        )}
      </StyledCartListWrap>
      <StyledCartTotalPrice>
        총 가격: {new Intl.NumberFormat().format(calculateTotalPrice())}원
      </StyledCartTotalPrice>
      <button onClick={handleCheckoutClick}>결제하기</button>
    </StyledCartWrap>
  );
};

export default CartPage;
