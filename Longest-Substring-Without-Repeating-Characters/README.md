# Longest Substring Without Repeating Characters

Given a string s, find the length of the longest substring without repeating characters.

## Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

## Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

## Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

# Code

```
const lengthOfLongestSubstring =  (s) => {
  let longest = 0;
  for (let i = 0; i < s.length; i++) {
    const substringArray = [];
    for (let j = i; j < s.length; j++) {
      const letter = s[j];
      if (!substringArray.includes(letter)) {
        substringArray.push(letter);
      } else {
        break;
      }
    }
    longest = Math.max(longest, substringArray.length);
  }
  return longest;
};

```
