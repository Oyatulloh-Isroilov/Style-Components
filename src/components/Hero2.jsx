import styled from "styled-components"
function Hero2() {

    const Header = styled.div`
    display: flex;
    justify-content:space-between;
    margin-left: auto;
    margin-right: auto;
    max-width: 1200px;
    gap: 30px;
    margin-top: 130px;
    font-family: "Poppins", sans-serif;
    `;

    const Hero = styled.div`
    font-family: "Poppins", sans-serif;
    display: flex;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 60px;
    margin-bottom: 30px;
    padding-bottom: 130px;
    border-bottom: 2px solid #000;
    justify-content: space-between;
    `;

    const LeftBlock = styled.div`
    gap:30px
    `;

    const RightBlock = styled.div`
    position: relative;
    `;

    const Img = styled.img`
    position: absolute;
    right:  180px;
    top: 900px
    `;

    const MainInfo = styled.h1`
    width: 480px;
    height: 228px;
    color: rgb(30, 37, 94);
    font-family: Gilroy-Bold;
    font-size: 61px;
    font-weight: 400;
    line-height: -1px;
    text-align: left;
    margin-top: 132px;
    margin-bottom: 20px;
    `;

    const Info = styled.p`
    width: 480px;
    height: 38px;
    color: rgba(30, 37, 94, 0.7);
    font-size: 16px;
    font-weight: 400;
    line-height: -1px;
    text-align: left;
    margin-bottom: 60px;
    `;

    const Button = styled.button`
    cursor: pointer;
    padding: 19px 48px;
    border-radius: 100px;
    color: #fff;
    background: rgb(0, 97, 254);
    border: none;
    `;

    return (
        <>
            <Header>
                <div className="logo">
                    <img src="./logo.svg" />
                </div>
                <div className="menu">
                    <img src="./menu.png" />
                </div>
            </Header>

            <Hero>
                <LeftBlock>
                    <MainInfo>The easiest way to manage team projects & tasks</MainInfo>
                    <Info>Take a tour of work management platform to see how you can do more of your best work.</Info>
                    <Button>KNOW MORE</Button>
                </LeftBlock>
                <div className="RightBlock">
                    <Img src="./hero2.png"></Img>
                </div>
            </Hero>
        </>
    )
}

export default Hero2;