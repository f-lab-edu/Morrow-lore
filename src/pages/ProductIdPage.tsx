import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useCart } from '../api/context/CartContext';
import { getTheProduct } from '../api/products/getProductsId';
import { putCarts } from '../api/cart/putCarts';
import styled from 'styled-components';

const StyleProduct = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
`;

const StyledProductWrap = styled.article`
  width: 100%;
  height: 90%;
  padding: 103px calc((100% - 1024px) / 2);
  display: flex;
`;

const StyledProductImg = styled.img`
  width: 60%;
  height: 100%;
  object-fit: contain;
`;

const StyledProductOption = styled.div`
  width: 40%;
  height: auto;
  padding: 1rem;
  margin-left: 1rem;
  background-color: #fcfcfc;
  position: relative;
`;

const StyledProductName = styled.h2`
  font-size: 1.6rem;
  color: rgb(29, 29, 31, 0.9);
`;

const StyledProductPrice = styled.p`
  margin-bottom: 10px;
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
`;

const StyledProductSubmitButton = styled.button`
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
`;

const SingleDetailPage: React.FC = () => {
  const { itemId } = useParams<{ itemId: string }>();
  const { addProductToCart } = useCart();
  const queryClient = useQueryClient();

  const {
    data: product,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['product', itemId],
    queryFn: () => getTheProduct(itemId!),
    enabled: !!itemId,
  });

  const cartMutation = useMutation({
    mutationFn: putCarts,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cartItems'] });
      if (product) {
        addProductToCart(product);
      }
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>상품 정보를 가져올 수 없습니다.</div>;
  if (!product) return <div>상품 정보가 없습니다.</div>;

  const handleAddToCart = () => {
    cartMutation.mutate({ product });
  };

  const handleDiscount = (price: number, sales: number) => {
    return price - (price * sales) / 100;
  };

  return (
    <StyleProduct>
      <StyledProductWrap>
        <StyledProductImg src={product.photo} alt={product.name} />
        <StyledProductOption>
          <StyledProductName>{product.name}</StyledProductName>
          <StyledProductPrice>
            <span>{product.price.toLocaleString()} 원</span>
            <span>
              {handleDiscount(product.price, product.sales).toLocaleString()} 원
            </span>
            <span>[{product.sales}% 할인]</span>
          </StyledProductPrice>
          <StyledProductSubmitButton onClick={handleAddToCart}>
            장바구니 담기
          </StyledProductSubmitButton>
        </StyledProductOption>
      </StyledProductWrap>
    </StyleProduct>
  );
};

export default SingleDetailPage;
