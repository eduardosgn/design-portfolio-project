import { Container, PrimaryButton } from '../style/GlobalComponentStyles.js';
import logo from '../assets/logo.svg';
import styled from 'styled-components';

const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 1rem 0 0 0;
`;

function Header() {
    return (
        <Container>
            <HeaderContainer>
                <img src={logo} alt="Design Logo" />
                <PrimaryButton>Free consultation</PrimaryButton>
            </HeaderContainer>
        </Container>
    );
}

export default Header;