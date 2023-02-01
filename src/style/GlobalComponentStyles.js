import styled from "styled-components";
import * as pallete from "./colorVars.js";

const { black, medium_brown, light_cream } = pallete.colors.neutral;

const { galatic_blue, light_red, summer_yellow } = pallete.colors.primary;

const fontSizes = {
    h1: {
        mobile: '2.25rem',
        desktop: '3.5rem'
    },
    h2: {
        mobile: '1.625rem',
        desktop: '2.5rem'
    },
    h3: '1.438rem',
    body: '1.125rem'
};

const { h1, h2, h3, body } = fontSizes;

// GLOBAL SECTION CONTAINER
export const Container = styled.section`
    margin: 0 1rem;
    min-width: 21.438rem;
    border: 1px solid black;
    margin: ${(props) => props.margin || 0};

    @media (min-width: 768px) {
        min-width: 43.125rem;
        margin: 0 auto;
    }

    @media (min-width: 1440px) {
        min-width: 69.375rem;
    }
`;

// GLOBAL TEXT STYLES
export const Title = styled.h1`
    color: ${(props) => props.textColor || black};
    font-size: ${h1.mobile};
    margin: ${(props) => props.margin || 0};
    text-align: ${(props) => props.textAlign || "left"};
    padding: ${(props) => props.padding || 0};

    @media (min-width: 1440px) {
        font-size: ${h1.desktop};
    }
`;

export const Subtitle = styled.h2`
    color: ${(props) => props.textColor || black};
    font-size: ${h2.mobile};
    margin: ${(props) => props.margin || 0};
    text-align: ${(props) => props.textAlign || "left"};

    @media (min-width: 1440px) {
        font-size: ${h2.desktop};
    }
`;

export const AccentTitle = styled.h3`
    color: ${(props) => props.textColor || black};
    font-size: ${h3};
    margin: ${(props) => props.margin || 0};
    text-align: ${(props) => props.textAlign || "left"};
`;

export const BodyText = styled.p`
    color: ${(props) => props.textColor || medium_brown};
    font-size: ${body};
    margin: ${(props) => props.margin || 0};
    padding: ${(props) => props.padding || 0};
    text-align: ${(props) => props.textAlign || "left"};
    line-height: 1.5;
`;

//GLOBAL BUTTON STYLES
export const PrimaryButton = styled.button`
    font-size: 1rem;
    color: ${ light_cream };
    font-weight: bold;
    background: ${ black };
    border-radius: 50px;
    border: none;
    padding: .9rem 2rem;
    cursor: pointer;
    transition: all 0.05s ease-in-out;

    &:hover {
        background: ${ galatic_blue }; 
    }
`;

export const SecondaryButton = styled.button`
    font-size: 1rem;
    color: ${ light_cream };
    font-weight: bold;
    background: ${ light_red };
    border-radius: 50px;
    border: none;
    padding: .9rem 2rem;
    cursor: pointer;
    transition: all 0.05s ease-in-out;

    &:hover {
        background: ${ summer_yellow }; 
    }
`;