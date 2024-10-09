/*
 * @lc app=leetcode.cn id=12 lang=javascript
 *
 * [12] 整数转罗马数字
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  const mapping = {
    1: "I",
    5: "V",
    10: "X",
    50: "L",
    100: "C",
    500: "D",
    1000: "M",
  };
  const splitNum = ("" + num).split("").map((d, i, a) => {
    return { sum: +d * Math.pow(10, a.length - 1 - i), digit: d };
  });
  let result = "";
  let queue = [1000, 500, 100, 50, 10, 5, 1];
  splitNum.forEach((v) => {
    let queueIndex = queue.findIndex((i) => i <= v.sum);
    if (["4", "9"].includes(v.digit)) {
      if (v.digit === "4") {
        result += mapping[queue[queueIndex]] + mapping[queue[queueIndex - 1]];
      } else {
        result +=
          mapping[queue[queueIndex + 1]] + mapping[queue[queueIndex - 1]];
      }
    } else {
      while (v.sum > 0) {
        if (v.sum < queue[queueIndex]) {
          queueIndex++;
        }
        v.sum -= queue[queueIndex];
        result += mapping[queue[queueIndex]];
      }
    }
  });
  return result;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = intToRoman;
// @after-stub-for-debug-end
