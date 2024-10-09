/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  // 可以将这个问题看做，左括号序列向右括号序列插入
  const ans = [];
  const legalIndexes = [];
  const leftBracketsIndex = Array.from(Array(n), (v, k) => k);
  let continueLoop = true;

  const parseBracketsFromIndexes = function (indexes) {
    let arrIndex = 0;
    let s = "";
    for (let i = 0; i < 2 * n; i++) {
      if (i === indexes[arrIndex]) {
        s += "(";
        arrIndex++;
      } else {
        s += ")";
      }
    }
    return s;
  };
  while (continueLoop) {
    ans.push(parseBracketsFromIndexes(leftBracketsIndex));
    legalIndexes.push([...leftBracketsIndex]);
    let i = leftBracketsIndex.length - 1;
    leftBracketsIndex[i]++;
    while (leftBracketsIndex[i] > 2 * i) {
      if (i <= 0) {
        continueLoop = false;
        break;
      }
      leftBracketsIndex[i - 1]++;
      let reInitIndex = i;
      while (reInitIndex < leftBracketsIndex.length) {
        leftBracketsIndex[reInitIndex] = leftBracketsIndex[reInitIndex - 1] + 1;
        reInitIndex++;
      }
      i--;
    }
    if (i <= 0) {
      break;
    }
  }
  return ans;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = generateParenthesis;
// @after-stub-for-debug-end
