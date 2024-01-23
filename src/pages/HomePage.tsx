import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import best from "../assets/image/best.jpg";

const StyleMain = styled.main`
  width: 100%;
  height: 100%;
`;

const StyleSection = styled.section`
  width: 100%;
  height: 100vh;
  margin: 0 auto;

  .banner {
    width: 100%;
    height: 100%;
    background-color: #1f2a24;
    position: relative;

    img {
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    h2 {
      position: absolute;
      top: 16%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 2;
      color: #f5f5f7;
      font-size: 3.8rem;
    }

    a {
      position: absolute;
      top: 78%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 2;
      color: #f5f5f7;
      border-bottom: 1px solid transparent;

      &:hover {
        border-bottom: 1px solid #f5f5f7;
      }
    }
  }
`;

const HomePage: React.FC = () => {
  return (
    <StyleMain>
      <StyleSection>
        <figure className="banner">
          <img src={best} alt="배너이미지" />
          <h2>MORROW LORE BEST COLLECTION</h2>
          <NavLink to="/product">Learn more</NavLink>
        </figure>
      </StyleSection>
    </StyleMain>
  );
};

export default HomePage;
