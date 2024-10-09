/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (!s) return "";
  if (s.length === 1) return s;
  let result = "";
  const isCircleText = function (str) {
    for (let i = 0; i <= str.length / 2; i++) {
      const rightIndex = str.length - 1 - i;
      if (str[i] !== str[rightIndex]) {
        return false;
      }
    }
    return true;
  };
  for (let start = 0; start <= s.length - 1; start++) {
    for (let end = 0; end <= s.length; end++) {
      const ss = s.slice(start, end);
      if (ss.length > result.length && isCircleText(ss)) {
        result = ss;
      }
    }
  }
  return result;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = longestPalindrome;
// @after-stub-for-debug-end