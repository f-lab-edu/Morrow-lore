import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import { ROUTES } from '../routes/ManageCenterRotue';
import { getTheProduct } from '../api/products/getProductsId';
import { deleteCarts } from '../api/cart/deleteCarts';
import { postCarts } from '../api/cart/postCarts';

const StyleProduct = styled.section`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const SingleDetailPage: React.FC = () => {
  const navigate = useNavigate();
  const { itemId } = useParams<{ itemId: string }>();
  const [product, setProducts] = useState([]);
  const [inCart, setInCart] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const item = await getTheProduct(itemId);
        setProducts(item.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleCartClick = async (product: object) => {
    if (inCart === false) {
      setInCart(true);
      await postCarts(product);
    } else {
      setInCart(false);
      await deleteCarts(product);
    }
  };

  const handleGoCartClick = () => {
    navigate(ROUTES.CHECKOUT);
  };

  return (
    <StyleProduct>
      <article>
        <h1>{product.name}</h1>
        <img src={product.photo} alt={product.name} />
        <p>{product.sales}</p>
        <p>가격: ${product.price}</p>
      </article>
      <aside>
        <button onClick={() => handleCartClick(product)}>장바구니담기</button>
        <button onClick={() => handleGoCartClick()}>결제하기</button>
      </aside>
    </StyleProduct>
  );
};

export default SingleDetailPage;
