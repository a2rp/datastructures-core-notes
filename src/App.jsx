// App.jsx
import React, { useRef, useState } from "react";
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
import { FiActivity, FiBookOpen, FiGitBranch, FiGrid, FiLayers, FiList, FiShare2, FiZap } from "react-icons/fi";

const App = () => {
    const mainRef = useRef(null);
    const [activeTopic, setActiveTopic] = useState("overview");
    const items = [["overview", "Overview", <FiBookOpen />], ["foundations", "Foundations", <FiLayers />], ["linearDataStructures", "Linear structures", <FiList />], ["hashBasedStructures", "Hash tables", <FiGrid />], ["trees", "Trees", <FiGitBranch />], ["graphs", "Graphs", <FiShare2 />], ["advancedStructures", "Advanced structures", <FiZap />], ["algorithmicPatterns", "Algorithmic patterns", <FiActivity />], ["complexityMaster", "Complexity guide", <FiLayers />]];
    const selectTopic = (key) => {
        setActiveTopic(key);
        mainRef.current?.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };

    return (
        <Styled.Wrapper>
            <Styled.Header>
                <Header />
            </Styled.Header>
            <Styled.Main ref={mainRef}>
                <aside className="studyNav" aria-label="Data structures topics">
                    <div className="studyNavLabel">Study guide</div>
                    <nav>{items.map(([key, label, icon]) => <button key={key} type="button" className={activeTopic === key ? "active" : ""} onClick={() => selectTopic(key)}>{icon}<span>{label}</span></button>)}</nav>
                    <p>Select a topic to open its notes.</p>
                </aside>
                <div className="contentWrapper">
                    {activeTopic === "overview" && <AboutDataStructures />}

                    <div className={`topicWrapper ${activeTopic === "foundations" ? "activeTopic" : ""}`}><Foundations /></div>
                    <div className={`topicWrapper ${activeTopic === "linearDataStructures" ? "activeTopic" : ""}`}><LinearDataStructures /></div>
                    <div className={`topicWrapper ${activeTopic === "hashBasedStructures" ? "activeTopic" : ""}`}><HashBasedStructures /></div>
                    <div className={`topicWrapper ${activeTopic === "trees" ? "activeTopic" : ""}`}><Trees /></div>
                    <div className={`topicWrapper ${activeTopic === "graphs" ? "activeTopic" : ""}`}><Graphs /></div>
                    <div className={`topicWrapper ${activeTopic === "advancedStructures" ? "activeTopic" : ""}`}><AdvancedStructures /></div>
                    <div className={`topicWrapper ${activeTopic === "algorithmicPatterns" ? "activeTopic" : ""}`}><AlgorithmicPatterns /></div>
                    <div className={`topicWrapper ${activeTopic === "complexityMaster" ? "activeTopic" : ""}`}><ComplexityMaster /></div>
                </div>

                <div className="footerWrapper">
                    <Footer />
                </div>
            </Styled.Main>
        </Styled.Wrapper>
    );
};

export default App;
