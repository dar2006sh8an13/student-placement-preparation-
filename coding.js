/* ===========================
   PlacePro – coding.js
   Coding Practice Engine
   =========================== */

const problems = [
  {
    id: 1, title: "Two Sum", diff: "easy", solved: true,
    tags: ["Arrays", "Hash Map"],
    desc: `<p>Given an array of integers <code>nums</code> and an integer <code>target</code>, return indices of the two numbers such that they add up to <code>target</code>.</p>
<p>You may assume exactly one solution exists, and you may not use the same element twice.</p>
<div class="example-box"><strong>Example 1:</strong><pre>Input: nums = [2,7,11,15], target = 9
Output: [0,1]</pre></div>
<div class="example-box"><strong>Example 2:</strong><pre>Input: nums = [3,2,4], target = 6
Output: [1,2]</pre></div>
<div class="constraints"><strong>Constraints:</strong><ul><li>2 ≤ nums.length ≤ 10⁴</li><li>Only one valid answer exists.</li></ul></div>`,
    starter: {
      python: `def twoSum(nums, target):
    # Write your solution here
    pass

# Test
print(twoSum([2,7,11,15], 9))`,
      javascript: `function twoSum(nums, target) {
    // Write your solution here
}

// Test
console.log(twoSum([2,7,11,15], 9));`,
      java: `class Solution {
    public int[] twoSum(int[] nums, int target) {
        // Write your solution here
        return new int[]{};
    }
}`,
      cpp: `#include <vector>
using namespace std;

class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        // Write your solution here
        return {};
    }
};`
    },
    solution: `def twoSum(nums, target):
    seen = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], i]
        seen[num] = i`,
    solutionNote: "💡 Use a hash map to store each number and check if the complement exists — O(n) time, O(n) space.",
    testcases: [
      { input: "[2,7,11,15], target=9", expected: "[0,1]" },
      { input: "[3,2,4], target=6", expected: "[1,2]" },
      { input: "[3,3], target=6", expected: "[0,1]" }
    ]
  },
  {
    id: 2, title: "Reverse a String", diff: "easy", solved: false,
    tags: ["Strings", "Two Pointers"],
    desc: `<p>Write a function that reverses a string. The input is given as an array of characters.</p>
<p>You must do this in-place with O(1) extra memory.</p>
<div class="example-box"><strong>Example:</strong><pre>Input: ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]</pre></div>`,
    starter: {
      python: `def reverseString(s):
    # Write your solution here
    pass

print(reverseString(["h","e","l","l","o"]))`,
      javascript: `function reverseString(s) {
    // Write your solution here
}

console.log(reverseString(["h","e","l","l","o"]));`,
      java: `class Solution {
    public void reverseString(char[] s) {
        // Write your solution here
    }
}`,
      cpp: `#include <vector>
using namespace std;
class Solution {
public:
    void reverseString(vector<char>& s) {
        // Write your solution here
    }
};`
    },
    solution: `def reverseString(s):
    left, right = 0, len(s) - 1
    while left < right:
        s[left], s[right] = s[right], s[left]
        left += 1
        right -= 1
    return s`,
    solutionNote: "💡 Two pointers from both ends swapping elements — O(n) time, O(1) space.",
    testcases: [
      { input: '["h","e","l","l","o"]', expected: '["o","l","l","e","h"]' },
      { input: '["H","a","n","n","a","h"]', expected: '["h","a","n","n","a","H"]' }
    ]
  },
  {
    id: 3, title: "FizzBuzz", diff: "easy", solved: false,
    tags: ["Math", "Strings"],
    desc: `<p>Given an integer n, return a string array where:</p>
<ul style="padding-left:20px; margin-top:10px;">
<li style="color:#64748b; margin-bottom:4px;"><code>answer[i] == "FizzBuzz"</code> if i is divisible by 3 and 5.</li>
<li style="color:#64748b; margin-bottom:4px;"><code>answer[i] == "Fizz"</code> if divisible by 3.</li>
<li style="color:#64748b; margin-bottom:4px;"><code>answer[i] == "Buzz"</code> if divisible by 5.</li>
<li style="color:#64748b;"><code>answer[i] == i</code> (as string) otherwise.</li>
</ul>
<div class="example-box" style="margin-top:16px;"><strong>Example (n=5):</strong><pre>Output: ["1","2","Fizz","4","Buzz"]</pre></div>`,
    starter: {
      python: `def fizzBuzz(n):
    # Write your solution here
    pass

print(fizzBuzz(15))`,
      javascript: `function fizzBuzz(n) {
    // Write your solution here
}
console.log(fizzBuzz(15));`,
      java: `import java.util.*;
class Solution {
    public List<String> fizzBuzz(int n) {
        // Write your solution here
        return new ArrayList<>();
    }
}`,
      cpp: `#include <vector>
#include <string>
using namespace std;
class Solution {
public:
    vector<string> fizzBuzz(int n) {
        // Write your solution here
        return {};
    }
};`
    },
    solution: `def fizzBuzz(n):
    result = []
    for i in range(1, n + 1):
        if i % 15 == 0:
            result.append("FizzBuzz")
        elif i % 3 == 0:
            result.append("Fizz")
        elif i % 5 == 0:
            result.append("Buzz")
        else:
            result.append(str(i))
    return result`,
    solutionNote: "💡 Check divisibility by 15 first (both 3 and 5), then 3, then 5, else convert to string.",
    testcases: [
      { input: "n=3", expected: '["1","2","Fizz"]' },
      { input: "n=5", expected: '["1","2","Fizz","4","Buzz"]' },
      { input: "n=15", expected: '..., "FizzBuzz"' }
    ]
  },
  {
    id: 4, title: "Valid Parentheses", diff: "easy", solved: false,
    tags: ["Stack", "Strings"],
    desc: `<p>Given a string s containing only <code>(</code>, <code>)</code>, <code>{</code>, <code>}</code>, <code>[</code>, <code>]</code>, determine if the input string is valid.</p>
<p>Open brackets must be closed by the same type and in the correct order.</p>
<div class="example-box"><strong>Examples:</strong><pre>Input: "()"   → true
Input: "()[]{}"  → true
Input: "(]"   → false</pre></div>`,
    starter: { python: `def isValid(s):
    # Write your solution here
    pass

print(isValid("()[]{}"))`, javascript: `function isValid(s) {}`, java: `class Solution { public boolean isValid(String s) { return false; }}`, cpp: `class Solution { public: bool isValid(string s) { return false; }};` },
    solution: `def isValid(s):
    stack = []
    pairs = {')':'(', '}':'{', ']':'['}
    for c in s:
        if c in '({[':
            stack.append(c)
        elif not stack or stack[-1] != pairs[c]:
            return False
        else:
            stack.pop()
    return len(stack) == 0`,
    solutionNote: "💡 Use a stack. Push open brackets, pop when a matching close bracket is found.",
    testcases: [
      { input: '"()"', expected: "true" }, { input: '"()[]{}"', expected: "true" }, { input: '"(]"', expected: "false" }
    ]
  },
  {
    id: 5, title: "Maximum Subarray", diff: "medium", solved: false,
    tags: ["DP", "Arrays", "Kadane's"],
    desc: `<p>Given an integer array nums, find the subarray which has the largest sum and return its sum.</p>
<div class="example-box"><strong>Example:</strong><pre>Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6 (subarray [4,-1,2,1])</pre></div>`,
    starter: { python: `def maxSubArray(nums):
    # Write your solution here
    pass

print(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))`, javascript: `function maxSubArray(nums) {}`, java: `class Solution { public int maxSubArray(int[] nums) { return 0; }}`, cpp: `class Solution { public: int maxSubArray(vector<int>& nums) { return 0; }};` },
    solution: `def maxSubArray(nums):
    max_sum = current = nums[0]
    for num in nums[1:]:
        current = max(num, current + num)
        max_sum = max(max_sum, current)
    return max_sum`,
    solutionNote: "💡 Kadane's Algorithm: at each step, decide whether to extend or restart the subarray — O(n).",
    testcases: [
      { input: "[-2,1,-3,4,-1,2,1,-5,4]", expected: "6" }, { input: "[1]", expected: "1" }, { input: "[5,4,-1,7,8]", expected: "23" }
    ]
  },
  {
    id: 6, title: "Binary Search", diff: "easy", solved: false,
    tags: ["Binary Search", "Arrays"],
    desc: `<p>Given a sorted array of integers nums and target, return the index of target or -1 if not found. Must be O(log n).</p>
<div class="example-box"><strong>Example:</strong><pre>Input: nums=[-1,0,3,5,9,12], target=9
Output: 4</pre></div>`,
    starter: { python: `def search(nums, target):
    pass

print(search([-1,0,3,5,9,12], 9))`, javascript: `function search(nums, target) {}`, java: `class Solution { public int search(int[] nums, int target) { return -1; }}`, cpp: `class Solution { public: int search(vector<int>& nums, int target) { return -1; }};` },
    solution: `def search(nums, target):
    lo, hi = 0, len(nums) - 1
    while lo <= hi:
        mid = (lo + hi) // 2
        if nums[mid] == target: return mid
        elif nums[mid] < target: lo = mid + 1
        else: hi = mid - 1
    return -1`,
    solutionNote: "💡 Classic binary search. Maintain lo and hi pointers. Check midpoint each iteration.",
    testcases: [
      { input: "nums=[-1,0,3,5,9,12], target=9", expected: "4" }, { input: "nums=[-1,0,3,5,9,12], target=2", expected: "-1" }
    ]
  }
];

let currentProblem = problems[0];
let currentLang = 'python';

function initCodingPage() {
  renderProblemList();
  loadProblem(currentProblem);
}

function renderProblemList() {
  const list = document.getElementById('problemList');
  if (!list) return;
  list.innerHTML = '';
  problems.forEach(p => {
    const item = document.createElement('div');
    item.className = 'problem-item' + (p.id === currentProblem.id ? ' active' : '');
    item.dataset.diff = p.diff;
    item.innerHTML = `
      <div>
        <div class="pi-title">${p.title}</div>
        ${p.solved ? '<div class="pi-status">✓ Solved</div>' : ''}
      </div>
      <span class="tag ${p.diff}">${p.diff.charAt(0).toUpperCase() + p.diff.slice(1)}</span>`;
    item.onclick = () => { loadProblem(p); document.querySelectorAll('.problem-item').forEach(i => i.classList.remove('active')); item.classList.add('active'); };
    list.appendChild(item);
  });
}

function loadProblem(p) {
  currentProblem = p;
  document.getElementById('problemTitle').textContent = p.title;
  const diffEl = document.getElementById('problemDiff');
  diffEl.textContent = p.diff.charAt(0).toUpperCase() + p.diff.slice(1);
  diffEl.className = 'tag ' + p.diff;
  document.getElementById('problemBody').innerHTML = p.desc;
  setCodeForLang();
  updateTestCases();
  updateSolution();
  document.getElementById('outputContent').innerHTML = '<div class="output-placeholder">Run your code to see the output here.</div>';
  switchOutput('output', document.querySelectorAll('.out-tab')[0]);
}

function setCodeForLang() {
  const editor = document.getElementById('codeEditor');
  if (editor) {
    editor.value = currentProblem.starter[currentLang] || '// Write your solution here';
    updateLineNums();
  }
}

function changeLang(lang) {
  currentLang = lang;
  setCodeForLang();
}

function resetCode() {
  setCodeForLang();
}

function updateLineNums() {
  const editor = document.getElementById('codeEditor');
  const lineNums = document.getElementById('lineNums');
  if (!editor || !lineNums) return;
  const lines = editor.value.split('\n').length;
  lineNums.textContent = Array.from({length: lines}, (_, i) => i + 1).join('\n');
}

function runCode() {
  const output = document.getElementById('outputContent');
  switchOutput('output', document.querySelectorAll('.out-tab')[0]);
  output.innerHTML = '<div class="output-placeholder">⏳ Running test cases...</div>';
  setTimeout(() => {
    const p = currentProblem;
    let html = '';
    p.testcases.forEach((tc, i) => {
      const passed = Math.random() > 0.3;
      html += `<div style="padding:6px 0; border-bottom:1px solid #1e293b; display:flex; gap:12px; align-items:center;">
        <span style="color:${passed?'#34d399':'#f87171'}">${passed?'✓':'✗'} Test ${i+1}</span>
        <span style="color:#64748b; font-size:0.8em;">${tc.input}</span>
        <span style="margin-left:auto; color:${passed?'#34d399':'#f87171'}">${passed ? tc.expected : 'Wrong Answer'}</span>
      </div>`;
    });
    html += `<div style="margin-top:10px; color:#94a3b8; font-size:0.8em;">Runtime: ${Math.floor(Math.random()*100+40)}ms &nbsp;|&nbsp; Memory: ${(Math.random()*5+13).toFixed(1)}MB</div>`;
    output.innerHTML = html;
  }, 900);
}

function submitCode() {
  const output = document.getElementById('outputContent');
  switchOutput('output', document.querySelectorAll('.out-tab')[0]);
  output.innerHTML = '<div class="output-placeholder">⏳ Submitting...</div>';
  setTimeout(() => {
    output.innerHTML = `<div class="output-success">✅ Accepted! All test cases passed.</div>
<div style="margin-top:10px; color:#94a3b8; font-size:0.8em;">Runtime: ${Math.floor(Math.random()*80+30)}ms (beats ~72%) &nbsp;|&nbsp; Memory: ${(Math.random()*4+12).toFixed(1)}MB</div>`;
    currentProblem.solved = true;
    renderProblemList();
  }, 1200);
}

function switchOutput(tab, btn) {
  ['output','testcases','solution'].forEach(id => {
    const el = document.getElementById(id + 'Content');
    if (el) el.style.display = 'none';
  });
  const target = document.getElementById(tab + 'Content');
  if (target) target.style.display = 'block';
  document.querySelectorAll('.out-tab').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
}

function updateTestCases() {
  const el = document.getElementById('testcasesContent');
  if (!el) return;
  el.innerHTML = currentProblem.testcases.map((tc, i) =>
    `<div class="tc-row"><span class="tc-label">Test ${i+1}</span><code>${tc.input}</code><span class="tc-exp">→ ${tc.expected}</span></div>`
  ).join('');
}

function updateSolution() {
  const el = document.getElementById('solutionContent');
  if (!el) return;
  el.innerHTML = `<pre class="solution-code">${currentProblem.solution}</pre>
<p class="sol-explain">${currentProblem.solutionNote}</p>`;
}

function filterProblems(diff) {
  document.querySelectorAll('.problem-item').forEach(item => {
    item.style.display = (diff === 'all' || item.dataset.diff === diff) ? 'flex' : 'none';
  });
}

// Editor line numbers
document.addEventListener('DOMContentLoaded', () => {
  const editor = document.getElementById('codeEditor');
  if (editor) {
    editor.addEventListener('input', updateLineNums);
    editor.addEventListener('keydown', e => {
      if (e.key === 'Tab') {
        e.preventDefault();
        const start = editor.selectionStart;
        editor.value = editor.value.substring(0, start) + '    ' + editor.value.substring(editor.selectionEnd);
        editor.selectionStart = editor.selectionEnd = start + 4;
        updateLineNums();
      }
    });
  }
  initCodingPage();
});
