import React from "react";
import { useParams } from "react-router-dom";

const SingleDetailPage: React.FC<{ products: Product[] }> = ({ products }) => {
  const { itemId } = useParams<{ itemId: string }>();

  // URL에서 가져온 itemId를 정수로 변환합니다.
  const productId = parseInt(itemId, 10);

  // products 배열에서 해당 itemId에 해당하는 제품을 찾습니다.
  const selectedProduct = products.find((product) => product.id === productId);

  if (!selectedProduct) {
    return <div>제품을 찾을 수 없습니다.</div>;
  }

  return (
    <div>
      <h1>{selectedProduct.name}</h1>
      <img src={selectedProduct.image} alt={selectedProduct.name} />
      <p>{selectedProduct.description}</p>
      <p>가격: ${selectedProduct.price}</p>
      <p>판매 수: {selectedProduct.sales}</p>
    </div>
  );
};

export default SingleDetailPage;
