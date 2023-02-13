import { Container, PrimaryButton } from "../style/GlobalComponentStyles.js";
import styled from "styled-components";
import logo from "../assets/logo.svg";

const FooterSection = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 0 1rem 0;
`;

function Footer() {
    return (
        <Container>
            <FooterSection>
                <img src={logo} alt="Amy's logo" />
                <PrimaryButton>Free consultation</PrimaryButton>
            </FooterSection>
        </Container>
    );
}

export default Footer;
