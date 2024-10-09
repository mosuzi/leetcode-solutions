/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const strArray = x.toString().split("");
  let isNegative = false;
  if (strArray[0] === "-") {
    isNegative = true;
    strArray.shift();
  }
  strArray.reverse();
  const newNumberStr = (isNegative ? "-" : "") + strArray.join("");
  const newNumber = parseInt(newNumberStr);
  if (
    (isNegative && newNumber < -Math.pow(2, 31)) ||
    (!isNegative && newNumber > Math.pow(2, 31) - 1)
  ) {
    return 0;
  }
  return newNumber;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = reverse;
// @after-stub-for-debug-end
