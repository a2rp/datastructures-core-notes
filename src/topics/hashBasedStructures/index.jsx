import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronUp,
    FiDatabase,
    FiHash,
    FiShuffle,
    FiLayers,
    FiTrendingUp,
} from "react-icons/fi";

const HashBasedStructures = () => {
    const [open, setOpen] = useState(true);

    return (
        <Styled.Wrapper>
            <Styled.Container className={open ? "open" : ""}>
                <Styled.Header onClick={() => setOpen(!open)}>
                    <div className="left">
                        <div className="icon">
                            <FiDatabase />
                        </div>
                        <div>
                            <h2>Hash Based Structures</h2>
                            <p>Fast lookup structures</p>
                        </div>
                    </div>

                    <div className="right">
                        {open ? <FiChevronUp /> : <FiChevronDown />}
                    </div>
                </Styled.Header>

                {open && (
                    <Styled.Content>
                        <div className="intro">
                            Hash based structures allow near constant-time
                            lookup, insertion, and deletion on average. They
                            trade ordering for speed. Understanding how hashing
                            works internally is critical to avoid worst case
                            performance traps.
                        </div>

                        <div className="grid">
                            {/* Hash Table */}
                            <div className="card">
                                <div className="cardHead">
                                    <FiHash />
                                    <h3>Hash Table</h3>
                                </div>
                                <p>
                                    A hash table stores key-value pairs and uses
                                    a hash function to compute an index for each
                                    key.
                                </p>
                                <pre>{`// C++ example
#include <unordered_map>

unordered_map<string,int> mp;
mp["apple"] = 10;
cout << mp["apple"]; // 10`}</pre>
                                <p className="mini">Average complexity: O(1)</p>
                            </div>

                            {/* Hash Function */}
                            <div className="card">
                                <div className="cardHead">
                                    <FiShuffle />
                                    <h3>Hash Function Basics</h3>
                                </div>
                                <p>
                                    A hash function converts a key into an
                                    index. Good hash functions distribute values
                                    evenly.
                                </p>
                                <pre>{`// Simplified example
index = key % table_size;`}</pre>
                                <p className="mini">
                                    Poor hash function leads to collisions.
                                </p>
                            </div>

                            {/* Collision Handling */}
                            <div className="card">
                                <div className="cardHead">
                                    <FiLayers />
                                    <h3>Collision Handling</h3>
                                </div>
                                <p>
                                    Collision happens when two keys map to same
                                    index.
                                </p>
                                <pre>{`// Chaining
index -> linked list of entries

// Open Addressing
Probe next free slot`}</pre>
                                <p className="mini">
                                    Chaining uses extra memory. Open addressing
                                    reduces memory but needs probing.
                                </p>
                            </div>

                            {/* Load Factor */}
                            <div className="card">
                                <div className="cardHead">
                                    <FiTrendingUp />
                                    <h3>Load Factor</h3>
                                </div>
                                <p>
                                    Load factor = number_of_elements /
                                    table_size.
                                </p>
                                <pre>{`load_factor = n / m;`}</pre>
                                <p>
                                    High load factor increases collisions and
                                    reduces performance.
                                </p>
                            </div>

                            {/* Rehashing */}
                            <div className="card">
                                <div className="cardHead">
                                    <FiDatabase />
                                    <h3>Rehashing</h3>
                                </div>
                                <p>
                                    When load factor exceeds threshold, table
                                    resizes and elements are rehashed.
                                </p>
                                <pre>{`// Happens internally
if(load_factor > threshold)
   resize_table();`}</pre>
                                <p className="mini">
                                    Expensive occasionally but amortized O(1).
                                </p>
                            </div>

                            {/* Set */}
                            <div className="card">
                                <div className="cardHead">
                                    <FiHash />
                                    <h3>Set</h3>
                                </div>
                                <p>Set stores unique values using hashing.</p>
                                <pre>{`# Python example
s = set()
s.add(10)
s.add(20)
print(10 in s)  # True`}</pre>
                                <p className="mini">No duplicates allowed.</p>
                            </div>

                            {/* Map */}
                            <div className="card">
                                <div className="cardHead">
                                    <FiDatabase />
                                    <h3>Map</h3>
                                </div>
                                <p>Map stores key-value pairs.</p>
                                <pre>{`# Python dict
d = {"a": 1}
print(d["a"])  # 1`}</pre>
                            </div>

                            {/* Unordered Map */}
                            <div className="card">
                                <div className="cardHead">
                                    <FiHash />
                                    <h3>Unordered Map Concept</h3>
                                </div>
                                <p>
                                    C++ unordered_map is hash based. Order is
                                    not maintained.
                                </p>
                                <pre>{`unordered_map<int,int> mp;
mp[1] = 100;`}</pre>
                                <p className="mini">
                                    Ordered map uses tree (O(log n)). Unordered
                                    map uses hashing (avg O(1)).
                                </p>
                            </div>

                            {/* Mental Focus */}
                            <div className="card">
                                <div className="cardHead">
                                    <FiTrendingUp />
                                    <h3>Mental Focus</h3>
                                </div>
                                <p>
                                    Average O(1) does not mean guaranteed O(1).
                                    Worst case can degrade to O(n).
                                </p>
                                <p className="mini">
                                    Understand trade-offs before blindly using
                                    hash structures.
                                </p>
                            </div>
                        </div>
                    </Styled.Content>
                )}
            </Styled.Container>
        </Styled.Wrapper>
    );
};

export default HashBasedStructures;
