import React from "react";
import { NavLink } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiAccountCircleOutline, mdiMagnify, mdiCartOutline } from "@mdi/js";
import styled from "styled-components";

const StyleHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px 5%;
  border-bottom: 1px solid rgb(29, 29, 31, 0.15);
  background-color: #f5f5f7;
  z-index: 10;
`;

const StyleLogo = styled(NavLink)`
  display: block;
  width: fit-content;
  margin-left: 0;
  margin-right: auto;

  h1 {
    font-size: 1.6rem;
  }
`;

const StyleMenu = styled.nav`
  display: flex;
  width: 20%;
  justify-content: space-between;
  margin: 0 auto;

  a {
    font-weight: 500;
  }
`;

const StyleGnb = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 8%;
  margin-right: 0;
  margin-left: auto;
  color: #1d1d1f;

  a,
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`;

const Header: React.FC = () => {
  return (
    <StyleHeader>
      <StyleLogo to="/">
        <h1>MORROWLORE</h1>
      </StyleLogo>

      <StyleMenu>
        <NavLink to="/product">제품</NavLink>
        <NavLink to="/product">베스트</NavLink>
        <NavLink to="/product">커스텀</NavLink>
      </StyleMenu>

      <StyleGnb>
        <NavLink to="/login">
          <span className="hidden">로그인</span>
          <Icon path={mdiAccountCircleOutline} size={1.1} />
        </NavLink>
        <button type="button">
          <span className="hidden">검색</span>
          <Icon path={mdiMagnify} size={1.1} />
        </button>
        <NavLink to="/cart">
          <span className="hidden">장바구니</span>
          <Icon path={mdiCartOutline} size={1.1} />
        </NavLink>
      </StyleGnb>
    </StyleHeader>
  );
};

export default Header;
