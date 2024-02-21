import styled from "styled-components"

function Header() {

    const Header = styled.div`
    display: flex;
    justify-content:space-between;
    margin-left: auto;
    margin-right: auto;
    max-width: 1200px;
    gap: 30px;
    margin-top: 30px
    `;

    const AHref = styled.a`
    color: rgb(30, 37, 94);
    font-weight:500;
    font-size: 14px;
    `;

    const Button = styled.button`
    color: #fff;
    border-radius: 100px;
    background-color: rgb(60, 78, 243);
    border: none;
    font-size: 14px;
    font-weight: 500;
    line-height: 21px;
    text-align: center;
    padding: 11px 23px;
    `;

    const Menu = styled.div`
    display: flex;
    margin-right: 50px;
    gap: 30px;
    `;

    return (

        <Header>
            <div className="logo">
                <img src="./logo.svg" alt="" />
            </div>
            <Menu>
                <AHref>Home</AHref>
                <AHref>About us</AHref>
                <AHref>How it works</AHref>
                <AHref>Services</AHref>
                <AHref>Contact</AHref>
            </Menu>
            <div className="btn">
                <Button>Get Started</Button>
            </div>
        </Header >
    )
}

export default Header