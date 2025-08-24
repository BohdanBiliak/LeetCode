# Add Two Numbers (Reverse-Order Linked Lists)

## Problem Statement

You are given two non-empty linked lists representing two non-negative integers.  
The digits are stored in **reverse order**, and each of their nodes contains a single digit.  
Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

---

## Example

**Input:**  
l1 = [2,4,3], l2 = [5,6,4]

**Explanation:**  
342 + 465 = 807
**Output:**  
[7,0,8]м

---

## Why not just convert to numbers?

- Direct conversion could cause **integer overflow** or **precision loss** for very large inputs.  
- The problem specifically requires us to simulate **digit-by-digit addition**, just like we do on paper.

---

## Idea / Approach

We add the numbers digit by digit, keeping track of the **carry**:

1. Traverse both linked lists simultaneously.  
2. At each step:  
   - Take digit `x` from `l1` (or `0` if list ended).  
   - Take digit `y` from `l2` (or `0` if list ended).  
   - Compute `sum = x + y + carry`.  
   - New digit = `sum % 10`.  
   - Update `carry = Math.floor(sum / 10)`.  
   - Append the new digit to the result list.  
3. After traversal, if `carry > 0`, append a new node with `carry`.  

We use a **dummy head node** to simplify building the result list.

---

## Complexity

- **Time Complexity:** `O(max(n, m))`, where `n` and `m` are the lengths of the two linked lists.  
- **Space Complexity:** `O(max(n, m))` for storing the resulting linked list.  
