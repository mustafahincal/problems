/**
 * @param {string} s
 * @return {string}
 */

const checkPalindrome = (str) => {
  let start = 0;
  let end = str.length - 1;
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
  let chArray = [];
  let result = "";
  for (const ch of s.split("")) {
    let chIndex = chArray.findIndex((c) => c == ch);
    if (chIndex != -1) {
      let substring = chArray.slice(chIndex, chArray.length).join("") + ch;
      if (checkPalindrome(substring) && substring.length > result.length) {
        result = substring;
      } else {
        chArray.push(ch);
      }
    } else {
      chArray.push(ch);
    }
  }
  return result;
};
