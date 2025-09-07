# Remove Duplicates from an Unsorted Linked List

**Difficulty:** Easy  
**Topics:** Linked List, HashSet  

---

## 📌 Problem Statement
Given the `head` of a **singly linked list**, remove all duplicate values so that each value appears **only once**.  
Return the modified linked list.

**Example:**
nput: head = [1, 1, 2, 3, 3]
Output: [1, 2, 3]
## 💡 Approach: Using a Set (Hash Table)
1. Create a `Set` to keep track of values that have been seen.  
2. Traverse the linked list with two pointers:
   - `current` → the current node being checked
   - `prev` → the previous node (needed to skip duplicates)
3. If `current.val` is in the `Set`, skip the node by setting `prev.next = current.next`.  
4. Otherwise, add the value to the `Set` and move `prev` forward.  
5. Continue until the end of the list.

## Complexity Analysis
Time Complexity: O(n) → traverse the list once
Space Complexity: O(n) → for storing values in the Set