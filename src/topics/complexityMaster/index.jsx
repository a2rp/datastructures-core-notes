import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronUp,
    FiTrendingUp,
    FiCpu,
    FiLayers,
    FiAlertTriangle,
    FiDatabase,
    FiActivity,
} from "react-icons/fi";

const ComplexityMaster = () => {
    const [open, setOpen] = useState(false);

    return (
        <Styled.Wrapper>
            <Styled.Container className={open ? "open" : ""}>
                <Styled.Header onClick={() => setOpen(!open)}>
                    <div className="left">
                        <div className="icon">
                            <FiTrendingUp />
                        </div>
                        <div>
                            <h2>Complexity Master Section</h2>
                            <p>Because most people misunderstand cost</p>
                        </div>
                    </div>
                    <div className="right">
                        {open ? <FiChevronUp /> : <FiChevronDown />}
                    </div>
                </Styled.Header>

                {open && (
                    <Styled.Content>
                        <div className="intro">
                            Big O is not the full story. Performance depends on
                            memory, CPU cache, recursion depth, and worst-case
                            behavior. This section builds real cost intuition.
                        </div>

                        <div className="grid">
                            <div className="card">
                                <div className="cardHead">
                                    <FiCpu />
                                    <h3>Time vs Space Tradeoffs</h3>
                                </div>
                                <p>
                                    Faster execution often requires extra
                                    memory. Reducing memory may increase
                                    computation time.
                                </p>

                                <pre>{`// Using extra array for faster lookup
bool seen[n]; // O(n) space
// Speeds up search from O(n²) to O(n)`}</pre>

                                <p className="mini">
                                    Tradeoff rule: Memory buys speed.
                                </p>
                            </div>

                            <div className="card">
                                <div className="cardHead">
                                    <FiDatabase />
                                    <h3>Cache Locality Intuition</h3>
                                </div>
                                <p>
                                    Contiguous memory (arrays) is faster because
                                    CPU cache loads nearby elements together.
                                </p>

                                <pre>{`// Array (cache friendly)
for(int i=0;i<n;i++){
   sum += arr[i];
}

// Linked list (cache unfriendly)
while(node){
   sum += node->value;
   node = node->next;
}`}</pre>

                                <p className="mini">
                                    Arrays often outperform linked lists even if
                                    theoretical complexity is same.
                                </p>
                            </div>

                            <div className="card">
                                <div className="cardHead">
                                    <FiAlertTriangle />
                                    <h3>Stack Overflow Concept</h3>
                                </div>
                                <p>
                                    Each recursive call consumes stack memory.
                                    Deep recursion can crash the program.
                                </p>

                                <pre>{`void f(int n){
   if(n==0) return;
   f(n-1);  // deep recursion
}`}</pre>

                                <p className="mini">
                                    Use iteration or tail recursion where
                                    possible.
                                </p>
                            </div>

                            <div className="card">
                                <div className="cardHead">
                                    <FiLayers />
                                    <h3>Memory Fragmentation</h3>
                                </div>
                                <p>
                                    Frequent dynamic allocation can scatter
                                    memory, reducing performance.
                                </p>

                                <pre>{`// Multiple small allocations
new Node();
new Node();
new Node();`}</pre>

                                <p className="mini">
                                    Contiguous allocation improves performance.
                                </p>
                            </div>

                            <div className="card">
                                <div className="cardHead">
                                    <FiActivity />
                                    <h3>Worst Case vs Average Case</h3>
                                </div>
                                <p>
                                    Always analyze worst case unless told
                                    otherwise.
                                </p>

                                <pre>{`// Hash table
// Average: O(1)
// Worst case: O(n) if collisions`}</pre>

                                <p className="mini">
                                    Real systems must survive worst-case
                                    behavior.
                                </p>
                            </div>

                            <div className="card">
                                <div className="cardHead">
                                    <FiTrendingUp />
                                    <h3>When Big O Lies</h3>
                                </div>
                                <p>
                                    Big O ignores constants and real hardware.
                                </p>

                                <pre>{`// O(n) array traversal
// O(n) linked list traversal

// Array is usually faster
// because of cache locality`}</pre>

                                <p className="mini">
                                    Complexity gives growth trend, not exact
                                    runtime.
                                </p>
                            </div>
                        </div>
                    </Styled.Content>
                )}
            </Styled.Container>
        </Styled.Wrapper>
    );
};

export default ComplexityMaster;
