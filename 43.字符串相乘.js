/*
 * @lc app=leetcode.cn id=43 lang=javascript
 *
 * [43] 字符串相乘
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  const num1Arr = num1.split("").map((_) => +_);
  const num2Arr = num2.split("").map((_) => +_);
  const resultArr = [];

  const setDigitGradually = function (index, value) {
    if (resultArr.length <= index) {
      resultArr.push(value);
    } else {
      resultArr[index] += value;
      if (resultArr[index] >= 10) {
        resultArr[index] -= 10;
        setDigitGradually(index + 1, 1);
      }
    }
  };

  for (let i = num1Arr.length - 1; i >= 0; i--) {
    const index = num1Arr.length - 1 - i;
    for (let j = num2Arr.length - 1; j >= 0; j--) {
      const product = num1Arr[i] * num2Arr[j];
      const digit = product % 10;
      const carry = Math.floor(product / 10);
      const resultIndex = index + num2Arr.length - 1 - j;
      setDigitGradually(resultIndex, digit);
      carry && setDigitGradually(resultIndex + 1, carry);
    }
  }
  // 删除前导 0
  let pt = resultArr.length - 1;
  while (!resultArr[pt] && pt > 0) {
    pt--;
    resultArr.pop();
  }
  resultArr.reverse();
  return resultArr.join("");
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = multiply;
// @after-stub-for-debug-end
