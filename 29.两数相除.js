/*
 * @lc app=leetcode.cn id=29 lang=javascript
 *
 * [29] 两数相除
 */

// @lc code=start
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  if (dividend === 0) return 0;
  const dividedDigits = [];
  const dividendPositive = dividend > 0;
  const divisorPositive = divisor > 0;
  const dividedPositive = !(dividendPositive ^ divisorPositive);
  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);
  const dividendDigits = ("" + dividend).split("").map((i) => +i);
  dividendDigits.reduce((p, c) => {
    let subDividend = p * 10 + c;
    let currentDividedDigit = 0;
    while (subDividend >= divisor) {
      subDividend -= divisor;
      currentDividedDigit++;
    }
    dividedDigits.push(currentDividedDigit);
    return subDividend;
  }, 0);
  let result = dividedPositive
    ? parseInt(dividedDigits.join(""))
    : -parseInt(dividedDigits.join(""));
  if (result > 2147483647) result = 2147483647;
  else if (result < -2147483648) result = -2147483648;
  return result;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = divide;
// @after-stub-for-debug-end
