/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const getCandidate = function (cs, tg) {
    if (tg === 0) return [[]];
    cs = cs.filter((it) => it <= tg);
    if (!cs.length) return [];
    const base = cs[0];
    const result = [];
    let tmpBase = base;
    let times = 1;

    const subCandidates = getCandidate(cs.slice(1), tg);
    for (let i = 0; i < subCandidates.length; i++) {
      result.push(subCandidates[i]);
    }

    while (tmpBase <= tg) {
      const baseArr = [Array(times).fill(base)];
      const subCandidates = getCandidate(cs.slice(1), tg - tmpBase);
      for (let i = 0; i < baseArr.length; i++) {
        for (let j = 0; j < subCandidates.length; j++) {
          const oneResult = baseArr[i].concat(subCandidates[j]);
          result.push(oneResult);
        }
      }
      times++;
      tmpBase += base;
    }
    return result;
  };
  const r =  getCandidate(candidates, target);
  return r
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = combinationSum;
// @after-stub-for-debug-end
