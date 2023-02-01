import {
    Container,
    Title,
    AccentTitle,
    BodyText,
} from "../style/GlobalComponentStyles.js";
import styled from "styled-components";
import * as pallete from "../style/colorVars.js";
import cardImage1 from "../assets/illustra-card-1.svg";
import cardImage2 from "../assets/illustra-card-2.svg";
import cardImage3 from "../assets/illustra-card-3.svg";
import cardImage4 from "../assets/illustra-card-4.svg";
import cardImage5 from "../assets/illustra-card-5.svg";
import cardImage6 from "../assets/illustra-card-6.svg";

const { light_cream } = pallete.colors.neutral;
const { dark_purple, galatic_blue, light_red, pink, summer_yellow, cyan } =
    pallete.colors.primary;

const GridCard = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-column-gap: 15px;
    grid-row-gap: 15px;

    @media (min-width: 768px) {
        grid-template-columns: 2fr repeat(2, 1fr);
    }

    @media (min-width: 1440px) {
        grid-template-columns: 2fr repeat(2, 1fr) 2fr;
        grid-template-rows: repeat(2, 1fr);
    }
`;

const Card = styled.div`
    background: ${(props) => props.cardBgColor};
    border-radius: 8px;
    padding: 2rem;
    grid-area: ${(props) => props.gridAreaMobile};
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (min-width: 768px) {
        grid-area: ${(props) => props.gridAreaTablet};
    }

    @media (min-width: 1440px) {
        grid-area: ${(props) => props.gridAreaDesktop};
    }

    > div {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 1rem;
    }
`;

function Hero() {
    return (
        <Container>
            <Title textAlign="center" padding="0 2rem" margin="2rem 0 0 0">
                Design solutions made easy
            </Title>

            <BodyText textAlign="center" margin="1.5rem 0" padding="0 1.5rem">
                With over ten years of experience in various design disciplines,
                I'm your one-stop shop for your design needs.
            </BodyText>

            <GridCard>
                <Card
                    cardBgColor={galatic_blue}
                    gridAreaMobile="1 / 1 / 2 / 3"
                    gridAreaTablet="1 / 1 / 4 / 2"
                    gridAreaDesktop="1 / 1 / 3 / 2"
                >
                    <div>
                        <img src={cardImage1} alt="" />
                    </div>

                    <AccentTitle textColor={light_cream}>
                        Graphic Design
                    </AccentTitle>
                </Card>

                <Card
                    cardBgColor={summer_yellow}
                    gridAreaMobile="2 / 1 / 3 / 2"
                    gridAreaTablet=" 1 / 2 / 3 / 3"
                    gridAreaDesktop="1 / 2 / 2 / 3"
                >
                    <div>
                        <img src={cardImage2} alt="" />
                    </div>

                    <AccentTitle textColor={light_cream}>UX/UI</AccentTitle>
                </Card>

                <Card
                    cardBgColor={pink}
                    gridAreaMobile="2 / 2 / 3 / 3"
                    gridAreaTablet="1 / 3 / 3 / 4"
                    gridAreaDesktop="1 / 3 / 2 / 4"
                >
                    <div>
                        <img src={cardImage3} alt="" />
                    </div>

                    <AccentTitle textColor={light_cream}>Apps</AccentTitle>
                </Card>

                <Card
                    cardBgColor={light_red}
                    gridAreaMobile="3 / 1 / 4 / 3"
                    gridAreaTablet="3 / 2 / 4 / 4"
                    gridAreaDesktop="1 / 4 / 2 / 5"
                >
                    <div>
                        <img src={cardImage4} alt="" />
                    </div>

                    <AccentTitle textColor={light_cream}>
                        Illustrations
                    </AccentTitle>
                </Card>

                <Card
                    cardBgColor={cyan}
                    gridAreaMobile="4 / 1 / 5 / 3"
                    gridAreaTablet="4 / 1 / 6 / 2"
                    gridAreaDesktop="2 / 2 / 3 / 4"
                >
                    <div>
                        <img src={cardImage5} alt="" />
                    </div>

                    <AccentTitle textColor={light_cream}>
                        Photography
                    </AccentTitle>
                </Card>

                <Card
                    cardBgColor={dark_purple}
                    gridAreaMobile="5 / 1 / 6 / 3"
                    gridAreaTablet=" 4 / 2 / 6 / 4"
                    gridAreaDesktop="2 / 4 / 3 / 5"
                >
                    <div>
                        <img src={cardImage6} alt="" />
                    </div>

                    <AccentTitle textColor={light_cream}>
                        Motion Graphics
                    </AccentTitle>
                </Card>
            </GridCard>
        </Container>
    );
}

export default Hero;
