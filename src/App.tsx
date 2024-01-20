import React from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/common/Header";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import LoginPage from "./pages/LoginPage";
import CartPage from "./pages/CartPage";
import MyPage from "./pages/MyPage";
import SignUpPage from "./pages/SignUpPage";
import SingleDetailPage from "./pages/SingleDetailPage";
import PaymentPage from "./pages/PaymentPage";
import CheckoutPage from "./pages/CheckoutPage";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/singledetail" element={<SingleDetailPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </div>
  );
};

export default App;
