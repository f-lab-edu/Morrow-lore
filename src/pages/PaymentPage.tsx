import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../routes/ManageCenterRotue';

const PaymentPage: React.FC = () => {
  const navigate = useNavigate();

  const handleCompletedPayment = () => {
    navigate(ROUTES.ORDERCOMPLETE);
  };

  return (
    <section>
      <h1>결제수단</h1>
      <ul>
        <li>
          <button onClick={() => handleCompletedPayment()}>간편결제</button>
        </li>
        <li>
          <button onClick={() => handleCompletedPayment()}>계좌</button>
        </li>
        <li>
          <button onClick={() => handleCompletedPayment()}>카드</button>
        </li>
      </ul>
    </section>
  );
};

export default PaymentPage;
