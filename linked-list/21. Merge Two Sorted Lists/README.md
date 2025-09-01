# Merge Two Sorted Linked Lists

## Problem

You are given the heads of **two sorted singly linked lists**, `list1` and `list2`.  

The task is to **merge them into one sorted linked list**. The resulting list should:

- Contain all nodes from both lists.
- Maintain ascending order.
- Reuse existing nodes if possible (splicing nodes).

### Examples

| Input                        | Output              |
|-------------------------------|-------------------|
| list1 = [1,2,4], list2 = [1,3,4] | [1,1,2,3,4,4]    |
| list1 = [], list2 = []         | []                 |
| list1 = [], list2 = [0]        | [0]                |

---

## Linked List Basics

A **singly linked list** consists of **nodes**, each containing:

```text
Node {
    val: number
    next: Node | null
}
val stores the data.

next points to the next node or null.

The head points to the first node.

Sequential traversal: O(n) to visit n nodes.
```

## Complexity Analysis

Time Complexity: O(n + m) — traverse each node once.

Space Complexity: O(1) — iterative in-place merge using dummy node.
