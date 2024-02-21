import styled from "styled-components";

function Hero3() {

    const Container = styled.div`
    background: url('./background.png') no-repeat center center fixed;
    background-size: cover;
    `;

    const Header = styled.div`
    display: flex;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
    max-width: 1200px;
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
    background: transparent;
    padding: 11px 46px;
    border: 1px solid #fff;
    font-size: 14px;
    font-weight: 500;
    line-height: 21px;
    text-align: center;
    margin-left: 50px;
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
        margin-left: auto;
        margin-right: auto;
        margin-top: 60px;
        padding-bottom: 130px;
        border-bottom: 2px solid #000;
        justify-content: space-between;
    `;

    const MainInfo = styled.h1`
    color: rgb(255, 255, 255);
    font-size: 64px;
    font-weight: 700;
    line-height: 96px;
    text-align: left;
    text-transform: uppercase;
    margin-bottom: 10px;
    `;

    const Info = styled.p`
    color: rgba(255, 255, 255, 0.7);
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;
    margin-bottom: 60px;
`;

    const PlayBtn = styled.button`
    cursor: pointer;
    display: flex;
    gap: 11px;
    padding: 20px 45px;
    border-radius: 2px;
    background: rgb(6, 51, 27);
    border: none;
    align-items: center;
    color: rgb(255, 255, 255);
    font-size: 14px;
    font-weight: 500;
    line-height: 21px;
    text-align: center;
    `;

    return (
        <>
            <Container>
                <Header>
                    <div className="logo">
                        <img src="./logo3.svg" alt="" />
                    </div>
                    <Menu>
                        <AHref>Home</AHref>
                        <AHref>About us</AHref>
                        <AHref>How it works</AHref>
                        <AHref>Contact</AHref>
                        <Button>Login</Button>
                    </Menu>
                </Header>
                <Hero>
                    <div className="LeftBlock">
                        <MainInfo>Ghost in the Shell</MainInfo>
                        <Info>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</Info>
                        <PlayBtn>Watch Now <img src="./play.svg" /></PlayBtn>
                    </div>
                    <div className="RightBlock">
                        <img src="./hero3.png" />
                    </div>
                </Hero>
            </Container>
        </>
    )
}

export default Hero3;
