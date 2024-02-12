import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import { ROUTES } from '../routes/ManageCenterRotue';
import { getTheProduct } from '../api/products/getProductsId';
import { deleteCarts } from '../api/cart/deleteCarts';
import { postCarts } from '../api/cart/postCarts';

interface Product {
  photo?: string;
  name?: string;
  price?: number;
  sales?: number;
}

const StyleProduct = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;

  article {
    width: 100%;
    height: 90%;
    padding: 103px calc((100% - 1024px) / 2);
    display: flex;

    img {
      width: 60%;
      height: 100%;
      object-fit: contain;
    }

    .productOption {
      width: 40%;
      height: auto;
      padding: 1rem;
      margin-left: 1rem;
      background-color: #fcfcfc;
      position: relative;

      h2 {
        font-size: 1.6rem;
        color: rgb(29, 29, 31, 0.9);
      }

      p {
        margin-bottom: 1rem;
        span {
          margin-right: 10px;
          &:nth-of-type(1) {
            text-decoration: line-through;
            font-size: 0.9rem;
            color: rgb(29, 29, 31, 0.7);
          }
          &:nth-of-type(2) {
            font-size: 1rem;
            font-weight: 600;
            color: rgb(29, 29, 31, 0.9);
          }
          &:nth-of-type(3) {
            font-size: 1rem;
            font-weight: 500;
            color: #df3409;
          }
        }
      }

      button {
        width: calc(50% - 5px);
        margin-right: 10px;
        background-color: #1d1d1f;
        color: #f5f5f7;
        font-size: 1rem;
        font-weight: 400;
        padding: 0.5rem;
        transition: all 0.3s;

        &:last-child {
          margin-right: 0px;
        }

        &:hover {
          background-color: #52057b;
        }
      }
    }
  }
`;

const SingleDetailPage: React.FC = () => {
  const navigate = useNavigate();
  const { itemId } = useParams<{ itemId: string }>();
  const [product, setProducts] = useState<Product>({});
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
  }, [itemId]);

  const handleCartClick = async (product: object) => {
    if (inCart === false) {
      setInCart(true);
      await postCarts(product);
    } else {
      setInCart(false);
      await deleteCarts(product);
    }
  };

  const handleDiscount = (price: number, sales: number) => {
    const discountAmount = price * (sales / 100);
    return price - discountAmount;
  };

  const handleGoCartClick = () => {
    navigate(ROUTES.CHECKOUT);
  };

  if (
    !product ||
    !product.name ||
    product.price === undefined ||
    product.sales === undefined
  ) {
    return <div>Loading...</div>;
  }

  return (
    <StyleProduct>
      <article>
        <img src={product.photo} alt={product.name} />
        <div className="productOption">
          <h2>{product.name}</h2>
          <p>
            <span>{product.price.toLocaleString()} 원</span>
            <span>
              {handleDiscount(product.price, product.sales).toLocaleString()}원
            </span>
            <span>[{product.sales}%]</span>
          </p>

          <div className="submitWrap">
            <button onClick={() => handleCartClick(product)}>
              장바구니 담기
            </button>
            <button onClick={() => handleGoCartClick()}>결제하기</button>
          </div>
        </div>
      </article>
    </StyleProduct>
  );
};

export default SingleDetailPage;
