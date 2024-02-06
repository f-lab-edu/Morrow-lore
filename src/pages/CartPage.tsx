import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CartPage: React.FC = () => {
  const [carts, setCarts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`/cart`)
      .then((response) => {
        setCarts(response.data);
      })
      .catch((error) => console.error('Fetching products failed:', error));
  }, []);

  const handleCheckoutClick = () => {
    navigate(`/checkout`);
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
