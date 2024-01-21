import React from "react";
import styled from "styled-components";
import mainimg from "../assets/image/main.png";
import main from "../assets/video/video.mp4";

const StyleMain = styled.main`
  width: 100%;
  height: 100%;
`;

const StyleSection = styled.section`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  position: relative;

  h2 {
    position: absolute;
    top: 35%;
    left: 24%;
    z-index: 2;
    font-size: 5rem;
    color: #3e3232;
  }

  figure {
    width: 100%;
    height: 100%;
    background-color: #010101;

    video {
      width: 100%;
      height: 100%;
    }
  }
`;

const HomePage: React.FC = () => {
  return (
    <StyleMain>
      <StyleSection>
        <h2>MORROW LORE</h2>
        <figure>
          <video autoPlay muted loop poster={mainimg}>
            <source src={main} type="video/mp4" />
            <track
              // src={mainvtt}
              src="main.vtt"
              kind="descriptions"
              srcLang="kr"
              label="Korean Descriptions"
              default
            />
          </video>
        </figure>
      </StyleSection>
    </StyleMain>
  );
};

export default HomePage;
