import styled from "styled-components";
import {
    Container,
    Subtitle,
    BodyText,
    SecondaryButton,
} from "../style/GlobalComponentStyles.js";

const ContactSection = styled.section`
    margin: 4rem 0;
    background: #000;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2.5rem 1.5rem;

    @media (min-width: 1000px) {
        flex-direction: row;
        gap: 5rem;
        padding: 3.5rem;
    }
`;

function Contact() {
    return (
        <Container>
            <ContactSection>
                <div>
                    <Subtitle
                        textAlignMobile="center"
                        textColor="white"
                        margin="0 0 1.5rem 0"
                    >
                        Book a call with me
                    </Subtitle>

                    <BodyText
                        textColor="white"
                        textAlignMobile="center"
                        margin="0 0 1.5rem 0"
                    >
                        I'd love to have a chat to see how I can help you. The
                        best first step is for us to discuss your project during
                        a free consultation. Then we can move forward from
                        there.
                    </BodyText>
                </div>

                <SecondaryButton width="70%">Free consultation</SecondaryButton>
            </ContactSection>
        </Container>
    );
}

export default Contact;
