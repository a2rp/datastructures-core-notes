import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronUp,
    FiGitBranch,
    FiLink,
    FiBarChart2,
    FiTrendingUp,
    FiShuffle,
} from "react-icons/fi";

const AdvancedStructures = () => {
    const [open, setOpen] = useState(false);

    return (
        <Styled.Wrapper>
            <Styled.Container className={open ? "open" : ""}>
                <Styled.Header onClick={() => setOpen(!open)}>
                    <div className="left">
                        <div className="icon">
                            <FiGitBranch />
                        </div>
                        <div>
                            <h2>Advanced Structures</h2>
                            <p>These separate serious candidates</p>
                        </div>
                    </div>

                    <div className="right">
                        {open ? <FiChevronUp /> : <FiChevronDown />}
                    </div>
                </Styled.Header>

                {open && (
                    <Styled.Content>
                        <div className="intro">
                            Advanced data structures solve problems that basic
                            arrays, stacks, or hash tables cannot handle
                            efficiently. These structures are often used in
                            competitive programming, system design, and
                            performance-critical applications.
                        </div>

                        <div className="grid">
                            {/* Trie */}
                            <div className="card">
                                <div className="cardHead">
                                    <FiLink />
                                    <h3>Trie</h3>
                                </div>

                                <p>
                                    A Trie is a tree-based structure used for
                                    storing strings efficiently. Each node
                                    represents a character.
                                </p>

                                <p className="mini">
                                    Best for prefix search, autocomplete,
                                    dictionary problems.
                                </p>

                                <pre>{`struct TrieNode {
  TrieNode* children[26];
  bool isEnd;
};

void insert(string word) {
  TrieNode* node = root;
  for(char c : word) {
    if(!node->children[c - 'a'])
      node->children[c - 'a'] = new TrieNode();
    node = node->children[c - 'a'];
  }
  node->isEnd = true;
}`}</pre>

                                <p className="mini">
                                    Time: O(L) where L = word length
                                </p>
                            </div>

                            {/* Union Find */}
                            <div className="card">
                                <div className="cardHead">
                                    <FiShuffle />
                                    <h3>Disjoint Set (Union Find)</h3>
                                </div>

                                <p>
                                    Used to detect connectivity between
                                    elements. Efficient for cycle detection in
                                    graphs.
                                </p>

                                <pre>{`int parent[N];

int find(int x){
  if(parent[x] == x) return x;
  return parent[x] = find(parent[x]);
}

void unionSet(int a, int b){
  int pa = find(a);
  int pb = find(b);
  if(pa != pb) parent[pa] = pb;
}`}</pre>

                                <p className="mini">
                                    Nearly O(1) with path compression.
                                </p>
                            </div>

                            {/* Segment Tree */}
                            <div className="card">
                                <div className="cardHead">
                                    <FiBarChart2 />
                                    <h3>Segment Tree</h3>
                                </div>

                                <p>
                                    Used for fast range queries (sum, min, max).
                                </p>

                                <pre>{`void build(int node, int start, int end){
  if(start == end){
    tree[node] = arr[start];
  } else {
    int mid = (start + end) / 2;
    build(2*node, start, mid);
    build(2*node+1, mid+1, end);
    tree[node] = tree[2*node] + tree[2*node+1];
  }
}`}</pre>

                                <p className="mini">Query & Update: O(log n)</p>
                            </div>

                            {/* Fenwick */}
                            <div className="card">
                                <div className="cardHead">
                                    <FiTrendingUp />
                                    <h3>Fenwick Tree</h3>
                                </div>

                                <p>
                                    Also called Binary Indexed Tree. Used for
                                    prefix sums efficiently.
                                </p>

                                <pre>{`void update(int i, int val){
  while(i <= n){
    bit[i] += val;
    i += (i & -i);
  }
}

int sum(int i){
  int s = 0;
  while(i > 0){
    s += bit[i];
    i -= (i & -i);
  }
  return s;
}`}</pre>

                                <p className="mini">
                                    Space efficient alternative to segment tree.
                                </p>
                            </div>

                            {/* Skip List */}
                            <div className="card">
                                <div className="cardHead">
                                    <FiGitBranch />
                                    <h3>Skip List</h3>
                                </div>

                                <p>
                                    A probabilistic alternative to balanced
                                    trees.
                                </p>

                                <p>
                                    Elements are stored in multiple layers to
                                    allow fast search, insert, delete.
                                </p>

                                <p className="mini">
                                    Average complexity: O(log n)
                                </p>
                            </div>
                        </div>
                    </Styled.Content>
                )}
            </Styled.Container>
        </Styled.Wrapper>
    );
};

export default AdvancedStructures;
