# Longest Palindromic Substring

Given a string s, return the longest palindromic

substring in s.

## Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.

## Example 2:

Input: s = "cbbd"
Output: "bb"

## Constraints:

1 <= s.length <= 1000
s consist of only digits and English letters.

# Code

```
const checkPalindrome = (str) => {
  let start = 0;
  let end = str.length - 1;
  if (str.length === 1) {
    return true;
  }
  while (start < end) {
    if (str[start] !== str[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
};

const longestPalindrome = (s) => {
  let longest = "";
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      let substring = s.substring(i, j);
      if (checkPalindrome(substring) && substring.length > longest.length) {
        longest = substring;
      }
    }
  }
  return longest;
};


```
