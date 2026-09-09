import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronUp,
    FiLayers,
    FiClock,
    FiCpu,
    FiTrendingUp,
    FiShuffle,
    FiActivity,
} from "react-icons/fi";

const Foundations = () => {
    const [open, setOpen] = useState(true);

    return (
        <Styled.Wrapper>
            <Styled.Container className={open ? "open" : ""}>
                <Styled.Header onClick={() => setOpen(!open)}>
                    <div className="left">
                        <div className="icon">
                            <FiLayers />
                        </div>
                        <div>
                            <h2>Foundations</h2>
                            <p>This is non-negotiable</p>
                        </div>
                    </div>

                    <div className="right">
                        {open ? <FiChevronUp /> : <FiChevronDown />}
                    </div>
                </Styled.Header>

                {open && (
                    <Styled.Content>
                        <div className="intro">
                            Strong data structure understanding begins with
                            performance awareness. Before learning trees,
                            graphs, or hashing, you must understand how cost
                            grows, how memory behaves, and why trade-offs exist.
                            If this section is strong, everything else becomes
                            obvious.
                        </div>

                        <div className="grid">
                            <div className="card">
                                <div className="cardHead">
                                    <FiCpu />
                                    <h3>What is a Data Structure</h3>
                                </div>
                                <p>
                                    A Data Structure is a way of organizing and
                                    storing data so that operations like access,
                                    insertion, deletion, and search can be
                                    performed efficiently.
                                </p>
                                <p className="mini">
                                    It is not just storage. It defines behavior
                                    and cost.
                                </p>
                            </div>

                            <div className="card">
                                <div className="cardHead">
                                    <FiShuffle />
                                    <h3>
                                        Abstract Data Type vs Data Structure
                                    </h3>
                                </div>
                                <p>
                                    An Abstract Data Type defines behavior. A
                                    Data Structure defines implementation.
                                </p>

                                <pre>{`// Stack is ADT
// Array-based stack is Data Structure`}</pre>
                            </div>

                            <div className="card">
                                <div className="cardHead">
                                    <FiClock />
                                    <h3>Time Complexity</h3>
                                </div>
                                <p>
                                    Time complexity measures how running time
                                    grows relative to input size.
                                </p>

                                <pre>{`// O(n)
for(int i=0;i<n;i++){
   cout << i;
}`}</pre>
                            </div>

                            <div className="card">
                                <div className="cardHead">
                                    <FiActivity />
                                    <h3>Space Complexity</h3>
                                </div>
                                <p>
                                    Space complexity measures how memory usage
                                    grows with input size.
                                </p>

                                <pre>{`// O(n) extra space
int arr[n];`}</pre>
                            </div>

                            <div className="card">
                                <div className="cardHead">
                                    <FiTrendingUp />
                                    <h3>Big O, Omega, Theta</h3>
                                </div>
                                <p>
                                    Big O → worst case Big Omega → best case Big
                                    Theta → tight bound
                                </p>
                                <p className="mini">
                                    Always analyze worst case unless specified.
                                </p>
                            </div>

                            <div className="card">
                                <div className="cardHead">
                                    <FiCpu />
                                    <h3>Growth Rates</h3>
                                </div>
                                <p>
                                    Constant O(1) Logarithmic O(log n) Linear
                                    O(n) Quadratic O(n²)
                                </p>
                                <p className="mini">
                                    Logarithmic growth scales far better than
                                    linear.
                                </p>
                            </div>

                            <div className="card">
                                <div className="cardHead">
                                    <FiLayers />
                                    <h3>Recursion Stack Cost</h3>
                                </div>
                                <p>
                                    Every recursive call uses stack memory. Deep
                                    recursion may cause stack overflow.
                                </p>

                                <pre>{`void f(int n){
  if(n==0) return;
  f(n-1);
}`}</pre>
                            </div>

                            <div className="card">
                                <div className="cardHead">
                                    <FiShuffle />
                                    <h3>Trade-off Thinking</h3>
                                </div>
                                <p>
                                    Faster access often means higher memory
                                    usage. Lower memory may increase computation
                                    time.
                                </p>
                            </div>

                            <div className="card">
                                <div className="cardHead">
                                    <FiClock />
                                    <h3>Amortized Analysis</h3>
                                </div>
                                <p>
                                    Some operations are expensive occasionally,
                                    but cheap on average.
                                </p>

                                <pre>{`// Vector resizing
// Occasional O(n)
// Average O(1)`}</pre>
                            </div>
                        </div>
                    </Styled.Content>
                )}
            </Styled.Container>
        </Styled.Wrapper>
    );
};

export default Foundations;
