import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { ROUTES } from '../routes/ManageCenterRotue';
import { getProducts } from '../api/products/getProducts';

const StyleProducts = styled.section`
  display: flex;
  width: 100%;
  height: 100vh;
  padding: 53px 0;

  .filter {
    width: 15%;
    height: 100%;
    padding: 1rem 2rem;
    border-right: 1px solid rgb(29, 29, 31, 0.15);

    h3 {
      font-size: 1.4rem;
      margin-bottom: 10px;
    }

    .color {
      border-top: 1px solid rgb(29, 29, 31, 0.15);
      padding: 10px 0;

      ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: start;
        align-items: top;

        li {
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 30%;
          margin: 10px 0;
          cursor: pointer;
          transition: all 0.3s;

          &:hover {
            label {
              opacity: 1;
            }
          }

          input[type='radio'] {
            position: absolute;
            top: 0;
            left: 0;
            z-index: -999px;
            opacity: 0;
          }

          input[type='radio']:checked + label {
            opacity: 1;
          }
        }
      }
    }
  }

  .scrollArea {
    width: 85%;
    height: 100%;
    padding: 2rem;
    display: flex;
    flex-wrap: wrap;
    align-items: top;

    > div {
      width: 30%;
      height: 450px;
      padding: 15px;
      margin: 1rem;
      transition: all 0.3s;

      &:hover {
        box-shadow: 3px 3px 10px rgb(29, 29, 31, 0.15);
      }

      img {
        display: block;
        width: 100%;
        height: 80%;
        object-fit: cover;
      }

      h3 {
        margin-top: 10px;
      }

      p {
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
    }
  }
`;

const StyledLabel = styled.label`
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  opacity: 0.7;
  background-color: ${(props) => props.bgColor};
  transition: all 0.3s;
`;

const ProductPage: React.FC = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await getProducts();
        setProducts(products.data.result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleProductClick = (productId: number) => {
    navigate(ROUTES.PRODUCTID(productId));
  };

  const handleDiscount = (price, sales) => {
    const discountAmount = price * (sales / 100);
    return price - discountAmount;
  };

  return (
    <StyleProducts>
      <aside className="filter">
        <h3>Filter</h3>
        <div className="color">
          <h4>Color</h4>
          <ul>
            <li>
              <input type="radio" name="color" id="red" />
              <StyledLabel htmlFor="red" bgColor={'red'}></StyledLabel>
              <p>레드</p>
            </li>
            <li>
              <input type="radio" name="color" id="orange" />
              <StyledLabel htmlFor="orange" bgColor={'orange'}></StyledLabel>
              <p>오렌지</p>
            </li>
            <li>
              <input type="radio" name="color" id="yellow" />
              <StyledLabel htmlFor="yellow" bgColor={'yellow'}></StyledLabel>
              <p>옐로우</p>
            </li>
            <li>
              <input type="radio" name="color" id="green" />
              <StyledLabel htmlFor="green" bgColor={'green'}></StyledLabel>
              <p>그린</p>
            </li>
            <li>
              <input type="radio" name="color" id="blue" />
              <StyledLabel htmlFor="blue" bgColor={'blue'}></StyledLabel>
              <p>블루</p>
            </li>
            <li>
              <input type="radio" name="color" id="navy" />
              <StyledLabel htmlFor="navy" bgColor={'navy'}></StyledLabel>
              <p>네이비</p>
            </li>
            <li>
              <input type="radio" name="color" id="purple" />
              <StyledLabel htmlFor="purple" bgColor={'purple'}></StyledLabel>
              <p>퍼플</p>
            </li>
          </ul>
        </div>
      </aside>
      <article className="scrollArea">
        {products.map((product) => (
          <div
            key={product.id}
            onClick={() => handleProductClick(product.id)}
            style={{ cursor: 'pointer' }}
          >
            <img src={product.photo} alt={product.name} />
            <h3>{product.name}</h3>
            <p>
              <span>{product.price.toLocaleString()} 원</span>
              <span>
                {handleDiscount(product.price, product.sales).toLocaleString()}
                원
              </span>
              <span>[{product.sales}%]</span>
            </p>
          </div>
        ))}
      </article>
    </StyleProducts>
  );
};

export default ProductPage;
