import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { ROUTES } from '../routes/ManageCenterRotue';
import { getProducts } from '../api/products/getProducts';

const StyleProducts = styled.section`
  display: flex;
  width: 100%;
  height: 100vh;
  padding: 53px 0;
`;

const StyledFilter = styled.aside`
  width: 15%;
  height: 100%;
  padding: 1rem 2rem;
  border-right: 1px solid rgb(29, 29, 31, 0.15);
`;

const StyledFilterTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 10px;
`;

const StyledColor = styled.div`
  border-top: 1px solid rgb(29, 29, 31, 0.15);
  padding: 10px 0;
`;

const StyledColorWrap = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  align-items: top;
`;

const StyledListColor = styled.li`
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
`;

const StyledRadio = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -999px;
  opacity: 0;

  &:checked + label {
    opacity: 1;
  }
`;

const StyledLabel = styled.label`
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  opacity: 0.7;
  background-color: ${(props) => props.$bgcolor};
  transition: all 0.3s;
`;

const StyledScrollArea = styled.article`
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
  }
`;

const StyledListImg = styled.img`
  display: block;
  width: 100%;
  height: 80%;
  object-fit: cover;
`;

const StyledListContents = styled.span`
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
`;

const ProductPage: React.FC = (): any => {
  const navigate = useNavigate();
  const {
    data: products,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  });

  const colorSet = [
    { color: 'red', value: '레드' },
    { color: 'orange', value: '오렌지' },
    { color: 'yellow', value: '옐로우' },
    { color: 'green', value: '그린' },
    { color: 'blue', value: '블루' },
    { color: 'navy', value: '네이비' },
    { color: 'purple', value: '퍼플' },
  ];

  const handleProductClick = (productId: number) => {
    navigate(ROUTES.PRODUCTID(productId));
  };

  const handleDiscount = (price: number, sales: number) => {
    const discountAmount = price * (sales / 100);
    return price - discountAmount;
  };

  return (
    <StyleProducts>
      <StyledFilter>
        <StyledFilterTitle>Filter</StyledFilterTitle>
        <StyledColor>
          <h4>Color</h4>
          <StyledColorWrap>
            {colorSet.map((color) => (
              <StyledListColor key={color.color}>
                <StyledRadio type="radio" name="color" id={color.color} />
                <StyledLabel htmlFor={color.color} $bgcolor={color.color} />
                <p>{color.value}</p>
              </StyledListColor>
            ))}
          </StyledColorWrap>
        </StyledColor>
      </StyledFilter>

      <StyledScrollArea>
        {isLoading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error loading products</div>
        ) : (
          products?.map((product) => (
            <div
              key={product.id}
              onClick={() => handleProductClick(product.id)}
              style={{ cursor: 'pointer' }}
            >
              <StyledListImg src={product.photo} alt={product.name} />
              <h3>{product.name}</h3>
              <p>
                <StyledListContents>
                  {product.price.toLocaleString()} 원
                </StyledListContents>
                <StyledListContents>
                  {handleDiscount(
                    product.price,
                    product.sales,
                  ).toLocaleString()}{' '}
                  원
                </StyledListContents>
                <StyledListContents>[{product.sales}%]</StyledListContents>
              </p>
            </div>
          ))
        )}
      </StyledScrollArea>
    </StyleProducts>
  );
};

export default ProductPage;
