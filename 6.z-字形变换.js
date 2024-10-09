/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1 || numRows >= s.length) {
    return s;
  }
  const columns = Math.ceil(s.length / numRows);
  // 构造数组
  const zStrArr = Array.from(Array(numRows), (v, k) =>
    Array.from(Array(columns), (_) => "")
  );
  const getNextIndex = function (x, y, h, arr) {
    if (x === h - 1) {
      // 到底
      return [x - 1, y + 1];
    } else if (x === 0) {
      // 顶头
      return [x + 1, y];
    } else if (arr[x - 1][y]) {
      return [x + 1, y];
    } else {
      return [x - 1, y + 1];
    }
  };
  const parseStrArr = function(arr) {
    return arr.map(i => i.join('')).join('')
  }
  let chIndex = [0, 0];
  for (c of s) {
    zStrArr[chIndex[0]][chIndex[1]] = c;
    chIndex = getNextIndex(...chIndex, numRows, zStrArr);
  }
  const newStr = parseStrArr(zStrArr);
  return newStr;
};
// @lc code=end
