/*
 * @lc app=leetcode.cn id=38 lang=javascript
 *
 * [38] 外观数列
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  // if (n === 1) return "1";
  let i = 1;
  let s = "1";
  while (i < n) {
    let str = "";
    let count = 0;
    let char = s[0];
    for (let idx = 0; idx < s.length; idx++) {
      if (char === s[idx]) {
        count++;
      } else {
        str += count + char;
        count = 1;
        char = s[idx];
      }
    }
    if (count) {
      str += count + char;
    }
    i++;
    s = str;
  }
  return s;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = countAndSay;
// @after-stub-for-debug-end
