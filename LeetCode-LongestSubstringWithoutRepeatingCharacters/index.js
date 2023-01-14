/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
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
