import {
    Container,
    Subtitle,
    BodyText,
    SecondaryButton,
} from "../style/GlobalComponentStyles.js";
import styled from "styled-components";
import amyPhoto from "../assets/amy-photo.png";

const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 900px) {
        flex-direction: row;
    }

    > div {
        display: flex;
        flex-direction: column;
        align-items: center;

        @media (min-width: 900px) {
            align-items: flex-start;
        }
    }

    > img {
        margin-bottom: 2.5rem;

        @media (min-width: 900px) {
            margin-right: 2rem;
            margin-bottom: 0;
        }

        @media (min-width: 1440px) {
            width: 50rem;
        }
    }
`;

function About() {
    return (
        <Container padding="6rem 0">
            <AboutContainer>
                <img src={amyPhoto} alt="Amy" />

                <div>
                    <Subtitle
                        textAlignMobile="center"
                        textAlignDesktop="left"
                        padding="0 1rem"
                    >
                        I'm Amy, and I'd love to work on your next project
                    </Subtitle>

                    <BodyText
                        textAlignMobile="center"
                        textAlignDesktop="left"
                        margin="1.5rem 0 2.5rem 0"
                        padding="0 1rem"
                    >
                        I love working with others to create beautiful design
                        solutions. I've designed everything from brand
                        illustrations to complete mobile apps. I'm also handy
                        with a camera!
                    </BodyText>

                    <SecondaryButton>Free consultation</SecondaryButton>
                </div>
            </AboutContainer>
        </Container>
    );
}

export default About;
