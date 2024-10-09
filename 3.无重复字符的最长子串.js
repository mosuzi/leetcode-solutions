/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (!s || !s.length) return 0;
  let startIndex = 0;
  let endIndex = 0;
  let charCount = {};
  let max = 1;
  const checkNoRepeat = function (c) {
    if (!c || !charCount[c]) {
      charCount[c] = true;
      return true;
    }
    return false;
  };
  const popCount = function (c) {
    if (!c || !charCount[c]) return;
    delete charCount[c];
  };

  for (; endIndex <= s.length; ) {
    const len = endIndex - startIndex;
    if (max < len) max = len;
    if (!checkNoRepeat(s[endIndex])) {
      // 找到下一个不重复的开始坐标
      while (s[startIndex] !== s[endIndex]) {
        popCount(s[startIndex]);
        startIndex++;
      }
      popCount(s[startIndex]);
      startIndex++;
    } else {
      endIndex++;
    }
  }
  return max;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = lengthOfLongestSubstring;
// @after-stub-for-debug-end
