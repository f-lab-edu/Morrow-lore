import React from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";

import sneakers1 from "../../assets/image/sneakers1.png";
import sneakers2 from "../../assets/image/sneakers2.png";
import sneakers3 from "../../assets/image/sneakers3.png";

const StyleSlider = styled.figure`
  width: 100%;
  height: 100%;
  background-color: #1f2a24;
  position: relative;

  img {
    display: block;
    width: 100%;
    height: 100vh;
    object-fit: cover;
    object-position: center center;
  }

  strong {
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    color: #f5f5f7;
    font-size: 5rem;
    text-shadow: 0px 0px 10px #1f2a24;
  }

  a {
    position: absolute;
    top: 90%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    color: #f5f5f7;
    padding: 0.5rem 1rem;
    border-radius: 30px;
    background-color: #52057b;
    transition: all 0.3s;

    &:hover {
      padding: 0.5rem 1.3rem;
    }
  }
`;

const Carousel: React.FC = () => {
  const settings = {
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3500,
  };

  return (
    <StyleSlider>
      <Slider
        fade={settings.fade}
        infinite={settings.infinite}
        speed={settings.speed}
        autoplay={settings.autoplay}
        slidesToShow={settings.slidesToShow}
        slidesToScroll={settings.slidesToScroll}
        autoplaySpeed={settings.autoplaySpeed}
      >
        <div>
          <img src={sneakers1} alt="스니커즈이미지1" />
          <strong>Your Design, Your Shoes</strong>
          <NavLink to="/product">Learn more</NavLink>
        </div>
        <div>
          <img src={sneakers2} alt="스니커즈이미지2" />
          <strong>Sneakers as Unique as You</strong>
          <NavLink to="/product">Learn more</NavLink>
        </div>
        <div>
          <img src={sneakers3} alt="스니커즈이미지3" />
          <strong>Creativity at Your Feet</strong>
          <NavLink to="/product">Learn more</NavLink>
        </div>
      </Slider>
    </StyleSlider>
  );
};

export default Carousel;
