/*
 * @lc app=leetcode.cn id=36 lang=javascript
 *
 * [36] 有效的数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const areaCache = {};
  const index = [0, 0];
  while (index[0] < 9) {
    // 读整行
    let column = 0;
    const columnCache = {};
    while (column < 9) {
      const target = board[index[0]][column];
      if (target !== ".") {
        if (!columnCache[target]) columnCache[target] = true;
        else return false;
        const areaIndex = Math.floor(index[0] / 3) * 3 + Math.floor(column / 3);
        if (!areaCache[areaIndex]) areaCache[areaIndex] = {};
        if (areaCache[areaIndex][target] === undefined)
          areaCache[areaIndex][target] = index[0] * 3 + column;
        else if (areaCache[areaIndex][target] !== index[0] * 3 + column)
          return false;
      }
      column++;
    }
    // 读整列
    let row = 0;
    const rowCache = {};
    while (row < 9) {
      const target = board[row][index[1]];
      if (target !== ".") {
        if (!rowCache[target]) rowCache[target] = true;
        else return false;
        const areaIndex = Math.floor(row / 3) * 3 + Math.floor(index[1] / 3);
        if (!areaCache[areaIndex]) areaCache[areaIndex] = {};
        if (areaCache[areaIndex][target] === undefined)
          areaCache[areaIndex][target] = row * 3 + index[1];
        else if (areaCache[areaIndex][target] !== row * 3 + index[1])
          return false;
      }
      row++;
    }
    index[0]++;
    index[1]++;
  }
  return true;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = isValidSudoku;
// @after-stub-for-debug-end
