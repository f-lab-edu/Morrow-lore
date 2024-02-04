import React from 'react';
import { useParams } from 'react-router-dom';

const SingleDetailPage: React.FC = () => {
  const { itemId } = useParams<{ itemId: string }>();
  const productId = parseInt(itemId, 10);

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.photo} alt={product.name} />
      <p>{product.description}</p>
      <p>가격: ${product.price}</p>
      <p>판매 수: {product.sales}</p>
    </div>
  );
};

export default SingleDetailPage;
