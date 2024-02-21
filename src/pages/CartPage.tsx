import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../routes/ManageCenterRotue';

const CartPage: React.FC = () => {
  const [carts, setCarts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/cart`);
        const cartItems = await response.json();
        setCarts(cartItems);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleCheckoutClick = () => {
    navigate(ROUTES.CHECKOUT);
  };

  return (
    <section>
      <h2>Cart Items</h2>
      <ul>
        {carts.map((product) => (
          <li key={`cart_${product.product.id}`}>
            <img src={product.product.photo} alt={product.product.name} />
            {product.product.name} - {product.product.price}
          </li>
        ))}
      </ul>
      <button
        onClick={() => {
          handleCheckoutClick();
        }}
      >
        결제하기
      </button>
    </section>
  );
};

export default CartPage;
