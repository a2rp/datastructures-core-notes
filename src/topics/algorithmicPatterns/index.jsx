import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronUp,
    FiRepeat,
    FiSearch,
    FiGitBranch,
    FiTarget,
    FiTrendingUp,
    FiLayers,
} from "react-icons/fi";

const AlgorithmicPatterns = () => {
    const [open, setOpen] = useState(false);

    return (
        <Styled.Wrapper>
            <Styled.Container>
                <Styled.Header onClick={() => setOpen(!open)}>
                    <div className="left">
                        <div className="icon">
                            <FiLayers />
                        </div>
                        <div>
                            <h2>Algorithmic Patterns</h2>
                            <p>This is gold</p>
                        </div>
                    </div>
                    <div className="right">
                        {open ? <FiChevronUp /> : <FiChevronDown />}
                    </div>
                </Styled.Header>

                {open && (
                    <Styled.Content>
                        <div className="intro">
                            Algorithmic patterns are reusable thinking models.
                            Instead of solving problems randomly, you recognize
                            structure. If you master patterns, you solve entire
                            classes of problems instead of single questions.
                        </div>

                        <div className="grid">
                            {/* Two Pointers */}
                            <div className="card">
                                <div className="cardHead">
                                    <FiRepeat />
                                    <h3>Two Pointers</h3>
                                </div>
                                <p>
                                    Use two indices moving through a structure.
                                    Often used in sorted arrays.
                                </p>
                                <pre>{`// Find pair with sum = target
int l = 0, r = n - 1;
while(l < r){
    int sum = arr[l] + arr[r];
    if(sum == target) break;
    else if(sum < target) l++;
    else r--;
}`}</pre>
                                <p className="mini">
                                    Works well when input is sorted.
                                </p>
                            </div>

                            {/* Sliding Window */}
                            <div className="card">
                                <div className="cardHead">
                                    <FiTarget />
                                    <h3>Sliding Window</h3>
                                </div>
                                <p>
                                    Maintain a window over a range instead of
                                    recomputing repeatedly.
                                </p>
                                <pre>{`// Max sum of subarray size k
int sum = 0;
for(int i=0;i<k;i++)
    sum += arr[i];

int maxSum = sum;

for(int i=k;i<n;i++){
    sum += arr[i] - arr[i-k];
    maxSum = max(maxSum, sum);
}`}</pre>
                            </div>

                            {/* Fast Slow */}
                            <div className="card">
                                <div className="cardHead">
                                    <FiRepeat />
                                    <h3>Fast & Slow Pointers</h3>
                                </div>
                                <p>Detect cycles in linked lists.</p>
                                <pre>{`// Floyd cycle detection
Node* slow = head;
Node* fast = head;

while(fast && fast->next){
    slow = slow->next;
    fast = fast->next->next;
    if(slow == fast) return true;
}`}</pre>
                            </div>

                            {/* Binary Search */}
                            <div className="card">
                                <div className="cardHead">
                                    <FiSearch />
                                    <h3>Binary Search Pattern</h3>
                                </div>
                                <p>Reduce search space by half every step.</p>
                                <pre>{`int l = 0, r = n-1;
while(l <= r){
    int mid = (l + r) / 2;
    if(arr[mid] == target) return mid;
    else if(arr[mid] < target) l = mid + 1;
    else r = mid - 1;
}`}</pre>
                            </div>

                            {/* Divide & Conquer */}
                            <div className="card">
                                <div className="cardHead">
                                    <FiGitBranch />
                                    <h3>Divide & Conquer</h3>
                                </div>
                                <p>Break problem into smaller parts.</p>
                                <pre>{`// Merge Sort structure
void mergeSort(int l, int r){
    if(l >= r) return;
    int mid = (l + r) / 2;
    mergeSort(l, mid);
    mergeSort(mid+1, r);
    merge(l, mid, r);
}`}</pre>
                            </div>

                            {/* Backtracking */}
                            <div className="card">
                                <div className="cardHead">
                                    <FiRepeat />
                                    <h3>Backtracking</h3>
                                </div>
                                <p>Try all possibilities and undo choices.</p>
                                <pre>{`void solve(int index){
    if(index == n){
        printSolution();
        return;
    }
    chooseOption();
    solve(index + 1);
    undoChoice();
}`}</pre>
                            </div>

                            {/* Greedy */}
                            <div className="card">
                                <div className="cardHead">
                                    <FiTrendingUp />
                                    <h3>Greedy Basics</h3>
                                </div>
                                <p>
                                    Make locally optimal choices hoping for
                                    global optimum.
                                </p>
                                <pre>{`// Activity selection idea
sort(activities.begin(), activities.end());
for(auto activity : activities){
    if(activity.start >= lastEnd){
        select(activity);
        lastEnd = activity.end;
    }
}`}</pre>
                            </div>

                            {/* Dynamic Programming */}
                            <div className="card">
                                <div className="cardHead">
                                    <FiLayers />
                                    <h3>Dynamic Programming Intro</h3>
                                </div>
                                <p>
                                    Store solutions of subproblems to avoid
                                    recomputation.
                                </p>
                                <pre>{`// Fibonacci DP
vector<int> dp(n+1);
dp[0]=0; dp[1]=1;
for(int i=2;i<=n;i++)
    dp[i]=dp[i-1]+dp[i-2];`}</pre>
                            </div>

                            {/* Recursion vs Iteration */}
                            <div className="card">
                                <div className="cardHead">
                                    <FiRepeat />
                                    <h3>Recursion vs Iteration</h3>
                                </div>
                                <p>
                                    Recursion is cleaner but uses stack space.
                                    Iteration is memory efficient.
                                </p>
                                <pre>{`// Recursive factorial
int fact(int n){
    if(n==0) return 1;
    return n * fact(n-1);
}

// Iterative factorial
int fact(int n){
    int res=1;
    for(int i=1;i<=n;i++)
        res*=i;
    return res;
}`}</pre>
                            </div>
                        </div>
                    </Styled.Content>
                )}
            </Styled.Container>
        </Styled.Wrapper>
    );
};

export default AlgorithmicPatterns;
