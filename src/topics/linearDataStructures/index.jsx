import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronUp,
    FiLayers,
    FiBox,
    FiLink,
    FiArrowRightCircle,
    FiRepeat,
} from "react-icons/fi";

const LinearDataStructures = () => {
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
                            <h2>Linear Data Structures</h2>
                            <p>Memory in sequence</p>
                        </div>
                    </div>
                    <div className="right">
                        {open ? <FiChevronUp /> : <FiChevronDown />}
                    </div>
                </Styled.Header>

                {open && (
                    <Styled.Content>
                        <div className="intro">
                            Linear data structures store elements in a
                            sequential manner. Each element has a single
                            predecessor and successor except the first and last.
                            Understanding memory layout here builds the base for
                            trees, graphs, and advanced structures.
                        </div>

                        <div className="focus">
                            Mental Focus:
                            <br />
                            Contiguous vs Non-contiguous memory
                            <br />
                            Access cost vs Insertion cost
                        </div>

                        <div className="grid">
                            {/* ARRAY */}
                            <div className="card">
                                <div className="cardHead">
                                    <FiBox />
                                    <h3>Array</h3>
                                </div>

                                <p>
                                    Stores elements in contiguous memory
                                    locations. Fast access using index.
                                </p>

                                <p className="mini">
                                    Access: O(1) | Insert: O(n)
                                </p>

                                <pre>{`int arr[5] = {1,2,3,4,5};
cout << arr[2];  // 3`}</pre>

                                <pre>{`// Insert at beginning (costly)
for(int i=n;i>0;i--){
  arr[i] = arr[i-1];
}`}</pre>
                            </div>

                            {/* STATIC VS DYNAMIC */}
                            <div className="card">
                                <div className="cardHead">
                                    <FiRepeat />
                                    <h3>Static vs Dynamic Arrays</h3>
                                </div>

                                <p>
                                    Static arrays have fixed size. Dynamic
                                    arrays resize at runtime.
                                </p>

                                <pre>{`// Static
int arr[5];

// Dynamic
int* arr = new int[n];`}</pre>
                            </div>

                            {/* VECTOR */}
                            <div className="card">
                                <div className="cardHead">
                                    <FiArrowRightCircle />
                                    <h3>Vector Concept</h3>
                                </div>

                                <p>Dynamic array that resizes automatically.</p>

                                <pre>{`vector<int> v;
v.push_back(10);
v.push_back(20);`}</pre>

                                <p className="mini">
                                    Amortized insertion: O(1)
                                </p>
                            </div>

                            {/* SINGLY LINKED LIST */}
                            <div className="card">
                                <div className="cardHead">
                                    <FiLink />
                                    <h3>Singly Linked List</h3>
                                </div>

                                <p>
                                    Nodes stored non-contiguously. Each node
                                    points to next.
                                </p>

                                <pre>{`struct Node {
  int data;
  Node* next;
};`}</pre>

                                <p className="mini">
                                    Access: O(n) | Insert at head: O(1)
                                </p>
                            </div>

                            {/* DOUBLY LINKED */}
                            <div className="card">
                                <div className="cardHead">
                                    <FiLink />
                                    <h3>Doubly Linked List</h3>
                                </div>

                                <p>Each node has previous and next pointer.</p>

                                <pre>{`struct Node {
  int data;
  Node* next;
  Node* prev;
};`}</pre>
                            </div>

                            {/* CIRCULAR */}
                            <div className="card">
                                <div className="cardHead">
                                    <FiRepeat />
                                    <h3>Circular Linked List</h3>
                                </div>

                                <p>Last node connects back to first node.</p>

                                <pre>{`tail->next = head;`}</pre>
                            </div>

                            {/* STACK */}
                            <div className="card">
                                <div className="cardHead">
                                    <FiBox />
                                    <h3>Stack (LIFO)</h3>
                                </div>

                                <p>Last In First Out structure.</p>

                                <pre>{`stack<int> s;
s.push(10);
s.pop();`}</pre>

                                <p className="mini">
                                    Used in recursion, expression evaluation.
                                </p>
                            </div>

                            {/* QUEUE */}
                            <div className="card">
                                <div className="cardHead">
                                    <FiArrowRightCircle />
                                    <h3>Queue (FIFO)</h3>
                                </div>

                                <p>First In First Out structure.</p>

                                <pre>{`queue<int> q;
q.push(10);
q.pop();`}</pre>
                            </div>

                            {/* DEQUE */}
                            <div className="card">
                                <div className="cardHead">
                                    <FiRepeat />
                                    <h3>Deque</h3>
                                </div>

                                <p>
                                    Double-ended queue. Insert and remove from
                                    both ends.
                                </p>

                                <pre>{`deque<int> d;
d.push_front(5);
d.push_back(10);`}</pre>
                            </div>
                        </div>
                    </Styled.Content>
                )}
            </Styled.Container>
        </Styled.Wrapper>
    );
};

export default LinearDataStructures;
