import styled from "styled-components";

function Hero5() {
    const Container = styled.div`
    margin-top: 50px;
    height: 100%;
  `;

    const Header = styled.div`
    display: flex;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
    max-width: 1200px;
    width: 100%;
    gap: 30px;
    padding-top: 30px;
    font-family: "Poppins", sans-serif;
    align-items: center;
  `;

    const AHref = styled.a`
    color: rgb(255, 255, 255);
    font-size: 14px;
    font-weight: 500;
    line-height: 21px;
    text-align: right;
  `;

    const Button = styled.button`
    cursor: pointer;
    color: rgb(255, 255, 255);
    font-size: 14px;
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 0px;
    text-align: center;
    padding: 11px 46px;
    background: transparent;
    border: 2px solid #fff;
    border-radius: 100px;
    transition: all 0.7s ease;

    &:hover {
      background: #fff;
      color: rgb(61, 61, 61);
    }
  `;

    const Menu = styled.div`
    display: flex;
    align-items: center;
    gap: 40px;
  `;

    const Hero = styled.div`
    font-family: "Poppins", sans-serif;
    display: flex;
    max-width: 1200px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 60px;
    justify-content: space-between;
    position: relative;
  `;

    const Infos = styled.div`
    text-align: center;
    `;

    const MainInfo = styled.h1`
    display: flex;
    background: linear-gradient(
      90deg,
      rgb(255, 226, 125),
      rgb(255, 181, 67),
      rgb(97, 255, 213),
      rgb(63, 181, 255)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-size: 64px;
    font-weight: 800;
    line-height: 88px;
    letter-spacing: 0px;
    text-align: center;
    margin-left: auto;
    margin-top: 138px;
    margin-right: auto;
    margin-bottom: 54px;
    width: 800px;
    margin-left: auto;
    margin-right: auto;
  `;

    const Info = styled.p`
    color: rgba(255, 255, 255, 0.7);
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    margin-bottom: 51px;
  `;

    const StartedBtn = styled.button`
    display: flex;
    cursor: pointer;
    color: rgb(35, 37, 34);
    font-size: 14px;
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 0%;
    text-align: center;
    border: none;
    transition: all 0.7s ease;
    border-radius: 100px;
    background: rgb(255, 255, 255);
    padding: 19px 36px;
    margin-left: auto;
    margin-right: auto;
    &:hover {
      background: transparent;
      color: #fff;
    }
  `;

    const Img = styled.img`
    width: 100%;
    height: 100%;
    margin-bottom: 30px;
    position: absolute;
    z-index: -100;
  `;

    return (
        <>
            <Container>
                <Img src="Hero5.png"></Img>
                <Header>
                    <div className="logo">
                        <img src="./logo3.svg" alt="" />
                    </div>
                    <Menu>
                        <AHref>Home</AHref>
                        <AHref>About us</AHref>
                        <AHref>How it works</AHref>
                        <AHref>Services</AHref>
                        <AHref>Contact</AHref>
                        <Button>Login</Button>
                    </Menu>
                </Header>
                <Hero>
                    <Infos>
                        <MainInfo>Manage faster and sell more with big data</MainInfo>
                        <Info>Quickly integrate our solution and start processing more sales with <b>Kreed</b></Info>
                        <StartedBtn>Get Started</StartedBtn>
                    </Infos>
                </Hero>
            </Container>
        </>
    );
}

export default Hero5;
