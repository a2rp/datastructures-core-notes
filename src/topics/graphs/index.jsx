import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronUp,
    FiShare2,
    FiGitBranch,
    FiRepeat,
    FiMap,
    FiLayers,
    FiActivity,
    FiArrowRightCircle,
} from "react-icons/fi";

const Graphs = () => {
    const [open, setOpen] = useState(true);

    return (
        <Styled.Wrapper>
            <Styled.Container className={open ? "open" : ""}>
                <Styled.Header onClick={() => setOpen(!open)}>
                    <div className="left">
                        <div className="icon">
                            <FiShare2 />
                        </div>
                        <div>
                            <h2>Graphs</h2>
                            <p>Connectivity thinking</p>
                        </div>
                    </div>

                    <div className="right">
                        {open ? <FiChevronUp /> : <FiChevronDown />}
                    </div>
                </Styled.Header>

                {open && (
                    <Styled.Content>
                        <div className="intro">
                            Graphs model relationships. Whenever data is about
                            connections between entities, graphs are the natural
                            structure. Social networks, road maps, dependencies,
                            routing systems — all are graphs. The mental focus
                            here is traversal patterns.
                        </div>

                        <div className="grid">
                            <div className="card">
                                <div className="cardHead">
                                    <FiLayers />
                                    <h3>Graph Basics</h3>
                                </div>
                                <p>
                                    A graph consists of vertices (nodes) and
                                    edges (connections between nodes).
                                </p>
                                <pre>{`// V = vertices
// E = edges
// Graph = (V, E)`}</pre>
                                <p className="mini">
                                    Unlike trees, graphs can contain cycles.
                                </p>
                            </div>

                            <div className="card">
                                <div className="cardHead">
                                    <FiGitBranch />
                                    <h3>Directed vs Undirected</h3>
                                </div>
                                <p>
                                    Directed graph: edges have direction.
                                    Undirected graph: edges are bidirectional.
                                </p>
                                <pre>{`// Directed edge
u -> v

// Undirected edge
u -- v`}</pre>
                            </div>

                            <div className="card">
                                <div className="cardHead">
                                    <FiActivity />
                                    <h3>Weighted vs Unweighted</h3>
                                </div>
                                <p>
                                    Weighted graphs assign cost to edges.
                                    Unweighted graphs treat all edges equally.
                                </p>
                                <pre>{`// Weighted edge
u -> v (cost = 5)`}</pre>
                            </div>

                            <div className="card">
                                <div className="cardHead">
                                    <FiMap />
                                    <h3>Adjacency List</h3>
                                </div>
                                <p>
                                    Stores neighbors of each node. Space
                                    efficient for sparse graphs.
                                </p>
                                <pre>{`// C++ representation
vector<int> adj[n];
adj[0].push_back(1);
adj[0].push_back(2);`}</pre>
                            </div>

                            <div className="card">
                                <div className="cardHead">
                                    <FiMap />
                                    <h3>Adjacency Matrix</h3>
                                </div>
                                <p>
                                    2D matrix representation. Useful for dense
                                    graphs.
                                </p>
                                <pre>{`int graph[n][n];
graph[u][v] = 1;`}</pre>
                                <p className="mini">Space complexity O(n²)</p>
                            </div>

                            <div className="card">
                                <div className="cardHead">
                                    <FiArrowRightCircle />
                                    <h3>BFS (Breadth First Search)</h3>
                                </div>
                                <p>Traverses level by level using queue.</p>
                                <pre>{`void bfs(int start){
  queue<int> q;
  vector<bool> visited(n,false);
  q.push(start);
  visited[start]=true;

  while(!q.empty()){
    int node = q.front();
    q.pop();

    for(int neighbor: adj[node]){
      if(!visited[neighbor]){
        visited[neighbor]=true;
        q.push(neighbor);
      }
    }
  }
}`}</pre>
                            </div>

                            <div className="card">
                                <div className="cardHead">
                                    <FiRepeat />
                                    <h3>DFS (Depth First Search)</h3>
                                </div>
                                <p>Explores deep before backtracking.</p>
                                <pre>{`void dfs(int node){
  visited[node]=true;

  for(int neighbor: adj[node]){
    if(!visited[neighbor]){
      dfs(neighbor);
    }
  }
}`}</pre>
                                <p className="mini">
                                    Uses recursion stack internally.
                                </p>
                            </div>

                            <div className="card">
                                <div className="cardHead">
                                    <FiActivity />
                                    <h3>Cycle Detection</h3>
                                </div>
                                <p>
                                    In directed graph: use recursion stack. In
                                    undirected graph: track parent.
                                </p>
                                <pre>{`// Undirected cycle check
bool dfs(int node, int parent){
  visited[node]=true;
  for(int neighbor: adj[node]){
    if(!visited[neighbor]){
      if(dfs(neighbor,node)) return true;
    }
    else if(neighbor!=parent)
      return true;
  }
  return false;
}`}</pre>
                            </div>

                            <div className="card">
                                <div className="cardHead">
                                    <FiGitBranch />
                                    <h3>Topological Sort</h3>
                                </div>
                                <p>
                                    Ordering of vertices in Directed Acyclic
                                    Graph.
                                </p>
                                <pre>{`// Using DFS
void topo(int node){
  visited[node]=true;
  for(int n: adj[node]){
    if(!visited[n])
      topo(n);
  }
  stack.push(node);
}`}</pre>
                            </div>

                            <div className="card">
                                <div className="cardHead">
                                    <FiMap />
                                    <h3>Dijkstra (Intro)</h3>
                                </div>
                                <p>
                                    Finds shortest path in weighted graph. Uses
                                    priority queue.
                                </p>
                                <pre>{`// Basic idea
priority_queue<pair<int,int>> pq;
vector<int> dist(n, INT_MAX);

dist[src]=0;
pq.push({0,src});

while(!pq.empty()){
  auto [d,node] = pq.top();
  pq.pop();

  for(auto [next,weight]: adj[node]){
    if(dist[node]+weight < dist[next]){
      dist[next] = dist[node]+weight;
      pq.push({-dist[next],next});
    }
  }
}`}</pre>
                            </div>
                        </div>
                    </Styled.Content>
                )}
            </Styled.Container>
        </Styled.Wrapper>
    );
};

export default Graphs;
