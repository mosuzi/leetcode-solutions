/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (x === 0) return 0;
  else if (x === 1 || n === 0) return 1;
  else if (x === -1) return n & 1 ? -1 : 1;
  let ans = 1;
  let i = 1;
  if (n > 0) {
    while (i <= n) {
      ans *= x;
      i++;
    }
  } else {
    n = -n;
    while (i <= n) {
      ans *= 1 / x;
      i++;
      if (Math.abs(ans) <= 0.0) {
        return 0;
      }
    }
  }
  return ans;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = myPow;
// @after-stub-for-debug-end
