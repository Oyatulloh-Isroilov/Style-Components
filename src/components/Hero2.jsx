import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Hero2() {

    const Header = styled.div`
    display: flex;
    justify-content:space-between;
    margin-left: auto;
    margin-right: auto;
    max-width: 1200px;
    gap: 30px;
    margin-top: 130px
    `;

    return (
        <Header>
            <div className="logo">
                <img src="./logo.svg" />
            </div>
            <div className="bars">
            </div>
        </Header>
    )
}

export default Hero2;