import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiAccountCircleOutline, mdiMagnify, mdiCartOutline } from '@mdi/js';
import styled from 'styled-components';
import { ROUTES } from '../../routes/ManageCenterRotue';
import { getCart } from '../../api/cart/getCart';

const StyleHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px calc((100% - 1024px) / 2);
  border-bottom: 1px solid rgb(29, 29, 31, 0.15);
  background-color: rgb(245, 245, 247, 0.6);
  backdrop-filter: blur(10px);
  z-index: 10;
`;

const StyleLogo = styled(NavLink)`
  display: block;
  width: 20%;
  margin-left: 0;
  margin-right: auto;

  h1 {
    font-size: 1.4rem;
  }
`;

const StyleMenu = styled.nav`
  display: flex;
  width: 60%;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  a {
    font-weight: 500;
    padding: 0 10px;
  }
`;

const StyleGnb = styled.nav`
  display: flex;
  align-items: center;
  justify-content: end;
  width: 20%;
  margin-right: 0;
  margin-left: auto;
  color: #1d1d1f;

  a,
  button {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    padding: 0 10px;
    .bedge {
      position: absolute;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background-color: rgb(223, 52, 9, 0.85);
      color: #f5f5f7;
      font-size: 12px;
      top: -10px;
      right: 0;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

const Header: React.FC = () => {
  const [cartNum, setCartNum] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const carts = await getCart();
        const cartsData = carts.data;
        setCartNum(cartsData.length);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [cartNum]);

  return (
    <StyleHeader>
      <StyleLogo to={ROUTES.HOME}>
        <h1>MORROWLORE</h1>
      </StyleLogo>

      <StyleMenu>
        <NavLink to={ROUTES.PRODUCTS}>제품</NavLink>
        <NavLink to={ROUTES.PRODUCTS}>베스트</NavLink>
        <NavLink to={ROUTES.PRODUCTS}>커스텀</NavLink>
      </StyleMenu>

      <StyleGnb>
        <NavLink to={ROUTES.LOGINL}>
          <span className="hidden">로그인</span>
          <Icon path={mdiAccountCircleOutline} size={1.1} />
        </NavLink>
        <button type="button">
          <span className="hidden">검색</span>
          <Icon path={mdiMagnify} size={1.1} />
        </button>
        <NavLink to={ROUTES.CART}>
          {cartNum > 0 && (
            <div className="bedge">
              <p>{cartNum}</p>
            </div>
          )}
          <span className="hidden">장바구니</span>
          <Icon path={mdiCartOutline} size={1.1} />
        </NavLink>
      </StyleGnb>
    </StyleHeader>
  );
};

export default Header;
