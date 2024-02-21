import React from 'react';
import styled from 'styled-components';

const StyledComponents = () => {
  const Hero = styled.div`
    display: flex;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 60px;
    padding-bottom: 30px;
    border-bottom: 2px solid #000;
  `;

  const MainInfo = styled.h1`
    color: rgb(30, 37, 94);
    font-size: 64px;
    font-weight: 700;
    line-height: 96px;
    margin-bottom: 10px;
  `;

  const Info = styled.p`
    color: rgba(30, 37, 94, 0.7);
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0px;
    text-align: left;
    margin-bottom: 50px;
  `;

  const Apps = styled.div`
    display: flex;
    gap: 20px;
  `;

  const Button = styled.button`
    cursor: pointer;  
    display: flex;
    color: rgb(60, 78, 243);
    border-radius: 100px;
    background-color: rgb(228, 230, 249);
    text-align: left;
    border: none;
    font-size: 14px;
    font-weight: 500;
    line-height: 21px;
    padding: 19px 35px;
    gap: 10.33px;
  `;

  return (
    <Hero>
      <div className="block1">
        <div className="mainInfo">
          <MainInfo>Connecting all your banking needs</MainInfo>
        </div>
        <div className="info">
          <Info>A smart mobile application you can control your business needs</Info>
        </div>
        <Apps>
          <Button><img src="./apple.svg" />Download App</Button>
          <Button><img src="./google-play.svg" />Download App</Button>
        </Apps>
      </div>
      <div className="block2">
        <div className="heroImg">
          <img src="./hero.png" alt="" />
        </div>
      </div>
    </Hero>
  );
};

export default StyledComponents;
