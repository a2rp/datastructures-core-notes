// App.jsx
import React from "react";
import { Styled } from "./App.styled";
import Header from "./components/header";
import Footer from "./components/footer";
import AboutDataStructures from "./components/aboutDatastructures";
import Foundations from "./topics/foundations";
import LinearDataStructures from "./topics/linearDataStructures";
import HashBasedStructures from "./topics/hashBasedStructures";
import Trees from "./topics/trees";
import Graphs from "./topics/graphs";
import AdvancedStructures from "./topics/advancedStructures";
import AlgorithmicPatterns from "./topics/algorithmicPatterns";
import ComplexityMaster from "./topics/complexityMaster";

const App = () => {
    return (
        <Styled.Wrapper>
            <Styled.Header>
                <Header />
            </Styled.Header>
            <Styled.Main>
                <div className="contentWrapper">
                    <AboutDataStructures />

                    <Foundations />
                    <LinearDataStructures />
                    <HashBasedStructures />
                    <Trees />
                    <Graphs />
                    <AdvancedStructures />
                    <AlgorithmicPatterns />
                    <ComplexityMaster />
                </div>

                <div className="footerWrapper">
                    <Footer />
                </div>
            </Styled.Main>
        </Styled.Wrapper>
    );
};

export default App;
