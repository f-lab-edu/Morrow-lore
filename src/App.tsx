import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/common/Header';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import CartPage from './pages/CartPage';
import MyPage from './pages/MyPage';
import SignUpPage from './pages/SignUpPage';
import PaymentPage from './pages/PaymentPage';
import CheckoutPage from './pages/CheckoutPage';

import LazyLoadWrapper from './components/utility/LazyLoadWrapper';

const ProductPage = lazy(() => import('./pages/ProductPage'));
const SingleDetailPage = lazy(() => import('./pages/SingleDetailPage'));

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route
          path="/product"
          element={
            <LazyLoadWrapper>
              <ProductPage />
            </LazyLoadWrapper>
          }
        />
        <Route
          path="/singledetail/:itemId"
          element={
            <LazyLoadWrapper>
              <SingleDetailPage />
            </LazyLoadWrapper>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
