# Valid Parentheses Checker

## Problem
Given a string `s` containing only the characters `'('`, `')'`, `'{'`, `'}'`, `'['`, and `']'`, determine if the string is **valid**.  

A string is valid if:

1. Every opening bracket has a corresponding closing bracket of the same type.  
2. Open brackets are closed in the correct order.

### Examples

| Input       | Output |
|------------|--------|
| `"()"`      | `true` |
| `"()[]{}"`  | `true` |
| `"(]"`      | `false` |
| `"([])"`    | `true` |
| `"([)]"`    | `false` |

---

## Approach: Using a Stack

We use a **stack** (Last-In-First-Out) to keep track of opening brackets.  

**Algorithm Steps:**

1. Initialize an empty stack `stack`.  
2. Create a map of closing to opening brackets:

```js
const map = { ')': '(', '}': '{', ']': '[' };
Loop through each character char in the string:

If char is an opening bracket (, {, [, push it to stack.

If char is a closing bracket ), }, ]:

Pop the top element from the stack.

If it does not match the corresponding opening bracket, return false.

After processing the string, check if stack is empty:

Empty → all brackets matched → return true.

Not empty → unmatched opening brackets → return false.
```
## Complexity Analysis

Time Complexity: O(n) — iterate through the string once.

Space Complexity: O(n) — in worst case, the stack may store all opening brackets.