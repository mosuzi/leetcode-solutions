/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// 最简实现
// var myAtoi = function (s) {
//   const r = parseInt(s);
//   if (isNaN(r)) {
//     return 0;
//   }
//   if (r < -2147483648) {
//     return -2147483648;
//   } else if (r > 2147483647) {
//     return 2147483647;
//   }
//   return r;
// };
myAtoi = function (s) {
  let validNumberStr = "";
  let isNegative = false;
  let disableOperator = false;
  for (c of s) {
    if (c && c >= "0" && c <= "9") {
      validNumberStr += c;
      disableOperator = true;
    } else if (c === "-") {
      if (!disableOperator) {
        disableOperator = true;
        isNegative = true;
      } else {
        break;
      }
    } else if (c ==='+') {
      if (!disableOperator) {
        disableOperator = true
      } else {
        break
      }
    } else if (c !== " " || (disableOperator && c === ' ')) {
      break;
    }
  }

  const parse = function (str) {
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
      sum += Math.pow(10, str.length - 1 - i) * +str[i];
    }
    return sum;
  };

  const r = isNegative ? -parse(validNumberStr) : parse(validNumberStr);

  // 边界处理
  if (r < -2147483648) {
    return -2147483648;
  } else if (r > 2147483647) {
    return 2147483647;
  }
  return r;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = myAtoi;
// @after-stub-for-debug-end
