import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronUp,
    FiGitBranch,
    FiLayers,
    FiTrendingUp,
    FiCpu,
} from "react-icons/fi";

const Trees = () => {
    const [open, setOpen] = useState(true);

    return (
        <Styled.Wrapper>
            <Styled.Container className={open ? "open" : ""}>
                <Styled.Header onClick={() => setOpen(!open)}>
                    <div className="left">
                        <div className="icon">
                            <FiGitBranch />
                        </div>
                        <div>
                            <h2>Trees</h2>
                            <p>Hierarchical structures</p>
                        </div>
                    </div>

                    <div className="right">
                        {open ? <FiChevronUp /> : <FiChevronDown />}
                    </div>
                </Styled.Header>

                {open && (
                    <Styled.Content>
                        <div className="intro">
                            Trees represent hierarchical relationships. Unlike
                            arrays or linked lists, trees branch. They are
                            fundamental for searching, sorting, indexing, and
                            system design. Understanding recursion and height
                            cost is essential here.
                        </div>

                        <div className="grid">
                            <div className="card">
                                <div className="cardHead">
                                    <FiLayers />
                                    <h3>Tree Terminology</h3>
                                </div>
                                <p>
                                    Root, Parent, Child, Leaf, Height, Depth,
                                    Subtree.
                                </p>

                                <pre>{`// Height of tree = longest path from root to leaf
// Height = number of edges`}</pre>
                            </div>

                            <div className="card">
                                <div className="cardHead">
                                    <FiCpu />
                                    <h3>Binary Tree</h3>
                                </div>
                                <p>Each node has at most two children.</p>

                                <pre>{`struct Node {
    int data;
    Node* left;
    Node* right;
};`}</pre>
                            </div>

                            <div className="card">
                                <div className="cardHead">
                                    <FiTrendingUp />
                                    <h3>Binary Search Tree</h3>
                                </div>
                                <p>
                                    Left subtree &lt; Root &lt; Right subtree.
                                </p>

                                <pre>{`Node* insert(Node* root, int val) {
    if(!root) return new Node{val, NULL, NULL};

    if(val < root->data)
        root->left = insert(root->left, val);
    else
        root->right = insert(root->right, val);

    return root;
}`}</pre>
                                <p className="mini">
                                    Search cost depends on height.
                                </p>
                            </div>

                            <div className="card">
                                <div className="cardHead">
                                    <FiGitBranch />
                                    <h3>Tree Traversals</h3>
                                </div>

                                <p>DFS: Inorder, Preorder, Postorder</p>

                                <pre>{`void inorder(Node* root){
    if(!root) return;
    inorder(root->left);
    cout << root->data;
    inorder(root->right);
}`}</pre>

                                <p>BFS: Level Order</p>

                                <pre>{`queue<Node*> q;
q.push(root);
while(!q.empty()){
   Node* curr = q.front();
   q.pop();
}`}</pre>
                            </div>

                            <div className="card">
                                <div className="cardHead">
                                    <FiLayers />
                                    <h3>Balanced Tree Concept</h3>
                                </div>
                                <p>
                                    Balanced tree keeps height small. Ideal
                                    height ≈ log(n).
                                </p>
                                <p className="mini">
                                    Unbalanced BST can degrade to O(n).
                                </p>
                            </div>

                            <div className="card">
                                <div className="cardHead">
                                    <FiCpu />
                                    <h3>AVL Tree (Concept)</h3>
                                </div>
                                <p>
                                    Self-balancing BST. Height difference ≤ 1.
                                </p>
                                <p className="mini">
                                    Uses rotations to maintain balance.
                                </p>
                            </div>

                            <div className="card">
                                <div className="cardHead">
                                    <FiTrendingUp />
                                    <h3>Red Black Tree (Concept)</h3>
                                </div>
                                <p>Balanced BST with coloring rules.</p>
                                <p className="mini">
                                    Used internally in map, set (C++).
                                </p>
                            </div>

                            <div className="card">
                                <div className="cardHead">
                                    <FiCpu />
                                    <h3>Heap</h3>
                                </div>
                                <p>Complete binary tree.</p>

                                <pre>{`// Array representation
// left = 2*i + 1
// right = 2*i + 2`}</pre>
                            </div>

                            <div className="card">
                                <div className="cardHead">
                                    <FiTrendingUp />
                                    <h3>Min Heap / Max Heap</h3>
                                </div>
                                <p>
                                    Min heap: parent ≤ children Max heap: parent
                                    ≥ children
                                </p>

                                <pre>{`// C++ priority queue (max heap by default)
priority_queue<int> pq;`}</pre>
                            </div>

                            <div className="card">
                                <div className="cardHead">
                                    <FiGitBranch />
                                    <h3>Priority Queue</h3>
                                </div>
                                <p>Abstract structure using heap internally.</p>

                                <pre>{`priority_queue<int, vector<int>, greater<int>> pq; // min heap`}</pre>
                            </div>
                        </div>

                        <div className="mental">
                            <h4>Mental Focus</h4>
                            <p>
                                Recursion is natural in trees. Height determines
                                time complexity. Divide and conquer patterns
                                emerge here.
                            </p>
                        </div>
                    </Styled.Content>
                )}
            </Styled.Container>
        </Styled.Wrapper>
    );
};

export default Trees;
