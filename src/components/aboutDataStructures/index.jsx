import React from "react";
import { Styled } from "./styled";
import { FiLayers, FiCpu, FiTrendingUp, FiClock } from "react-icons/fi";

const AboutDataStructures = () => {
    const buildISO = __APP_BUILD_ISO__;

    const formattedDateTime = new Date(buildISO).toLocaleString("en-US", {
        year: "numeric",
        month: "long",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
    });

    return (
        <Styled.Wrapper>
            <Styled.Container>
                <div className="header">
                    <div className="iconBox">
                        <FiLayers />
                    </div>
                    <h2 className="title">About Data Structures</h2>
                </div>

                <p>
                    Data Structures are organized ways of storing and managing
                    data so that it can be accessed and modified efficiently.
                    They are the foundation of algorithm design and performance
                    optimization. Choosing the correct data structure directly
                    impacts speed, memory usage, and scalability of software
                    systems.
                </p>

                <p>
                    Beyond definitions, understanding data structures means
                    understanding trade-offs. Arrays offer fast access but slow
                    insertion. Linked lists offer flexible insertion but slower
                    traversal. Hash tables provide average constant-time lookup
                    but depend heavily on hashing quality. Trees and graphs
                    model hierarchical and network relationships that linear
                    structures cannot represent.
                </p>

                <p>
                    This project focuses on clarity over memorization. Each
                    structure is explained through its internal behavior, time
                    complexity, space cost, and real-world usage patterns. The
                    goal is not just to implement structures, but to develop the
                    intuition required to choose the right one under pressure.
                </p>

                <div className="metaRow">
                    <div className="metaItem">
                        <FiCpu />
                        <span>Performance Thinking</span>
                    </div>
                    <div className="metaItem">
                        <FiTrendingUp />
                        <span>Complexity Awareness</span>
                    </div>
                </div>

                <div className="metaBar">
                    <span className="metaLeft">
                        <span className="metaIcon">
                            <FiClock />
                        </span>
                        <span className="metaLabel">Last updated</span>
                    </span>

                    <span className="metaValue">{formattedDateTime}</span>
                </div>
            </Styled.Container>
        </Styled.Wrapper>
    );
};

export default AboutDataStructures;
