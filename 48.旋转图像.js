/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  const n = matrix.length;
  const matrixLength = n * n;
  const rotateCache = {};
  let cacheLength = 0;
  const getId = function (x, y) {
    return x + "," + y;
  };
  const makeRotate = function (x, y, preValue) {
    const thisId = getId(x, y);
    if (rotateCache[thisId]) return;
    const nextY = n - 1 - x;
    if (preValue === undefined) {
      preValue = matrix[y][nextY];
      matrix[y][nextY] = matrix[x][y];
      matrix[x][y] = preValue;
    } else {
      const nextValue = matrix[y][nextY];
      matrix[y][nextY] = preValue;
      preValue = nextValue;
    }
    rotateCache[thisId] = true;
    cacheLength++;
    makeRotate(y, nextY, preValue);
  };
  for (let i = 0; i < n && cacheLength < matrixLength; i++) {
    for (let j = 0; j < n && cacheLength < matrixLength; j++) {
      makeRotate(i, j);
    }
  }
  return
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = rotate;
// @after-stub-for-debug-end
