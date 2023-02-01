import styled from "styled-components";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import MyWork from "./components/MyWork/MyWork.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

const GlobalContainer = styled.main`
    display: flex;
    flex-direction: column;
    margin: 0 1rem;

    @media (min-width: 768px) {
        margin: 0;
    }
`;

function App() {
    return (
        <>
            <GlobalContainer>
                <Header />
                <Hero />
                <About />
            </GlobalContainer>

            <MyWork />

            <GlobalContainer>
                <Contact />
                <Footer />
            </GlobalContainer>
        </>
    )
}

export default App;
