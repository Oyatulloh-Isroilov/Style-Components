import styled from "styled-components";

function Hero4() {

    const Container = styled.div`
    margin-top: 50px;
    background: linear-gradient(215.59deg, rgb(61, 61, 61) 17.021%,rgb(37, 37, 37) 98.791%);
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
    background: transparent;
    padding: 11px 46px;
    border: 1px solid #fff;
    font-size: 14px;
    font-weight: 500;
    line-height: 21px;
    text-align: center;
    margin-left: 50px;
    border-radius: 10px;
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

    const MainInfo = styled.h1`
    color: rgb(238, 233, 219);
    font-size: 58px;
    font-weight: 700;
    line-height: 87px;
    letter-spacing: 0px;
    text-align: left;
    `;

    const Info = styled.p`
    color: rgba(255, 255, 255, 0.7);
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;
    margin-bottom: 60px;
`;

    const ProductBtn = styled.button`
    cursor: pointer;
    display: flex;
    gap: 11px;
    padding: 20px 39px;
    border-radius: 4px;
    background: rgb(242, 192, 52);
    color: rgb(40, 40, 40);
    font-family: Poppins;
    font-size: 14px;
    font-weight: 500;
    line-height: 21px;
    letter-spacing: 0%;
    text-align: center;
    border: none;
    transition: all 0.7s ease;

    &:hover {
        background: transparent;
        color: rgb(242, 192, 52);
    }
    `;

    const Img = styled.img`
    margin-bottom: 30px;
    `;

    return (
        <>
            <Container>
                <Header>
                    <div className="logo">
                        <img src="./logo3.svg" alt="" />
                    </div>
                    <Menu>
                        <AHref>Headphones</AHref>
                        <AHref>Speakers</AHref>
                        <AHref>Backstage</AHref>
                        <AHref>Studio</AHref>
                        <AHref>Accessories</AHref>
                        <Button>Login</Button>
                    </Menu>
                </Header>
                <Hero>
                    <div className="LeftBlock">
                        <MainInfo>Build your own wall of sound.</MainInfo>
                        <Info>Winners aren't made overnight. Over 50 years of sound and design expertise has been distilled into each and every Marshall speaker, bringing that big stage presence home for your listening enjoyment.</Info>
                        <ProductBtn>Watch Now</ProductBtn>
                    </div>
                    <div className="RightBlock">
                    </div>
                </Hero>
                <Img src="hero4.png"></Img>
            </Container>
        </>
    )
}

export default Hero4;
