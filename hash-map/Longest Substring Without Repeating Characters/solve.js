
s = "abcabcbb"

function lengthOfLongestSubstring(s)  {

  // Stores: for each character, the last index where we saw it
  const charIndexMap = {};
  // Window start
  let left = 0;
  // Longest valid window size seen so far
  let maxLength = 0;

  // Expand the window by moving 'right' from 0 to s.length - 1
  for (let right = 0; right < s.length; right++) {
    const char = s[right];

    // If we've seen this char before AND its last seen index is inside the current window,
    // we have a duplicate inside [left ... right]. To keep the window valid (no duplicates),
    // jump 'left' to one position after the previous occurrence.
    if (char in charIndexMap && charIndexMap[char] >= left) {
      left = charIndexMap[char] + 1;
    }

    // Update the last seen index for this character to the current position
    charIndexMap[char] = right;

    // Update the best (max) length: current window is [left ... right]
    maxLength = Math.max(maxLength, right - left + 1);
  }

  // You forgot this line: we must return the answer
  return maxLength;
}



lengthOfLongestSubstring(s);

