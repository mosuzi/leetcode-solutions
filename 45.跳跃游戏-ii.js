/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  const cache = {};
  const subJump = function (ns) {
    const id = ns.join("_");
    if (cache[id]) return cache[id];
    if (ns.length === 1) {
      cache[id] = 0;
      return cache[id];
    }
    const lastJump = [];
    let pt = ns.length - 2;
    while (pt >= 0 && pt >= ns.length - 1001) {
      if (!!ns[pt] && ns[pt] + pt >= ns.length - 1) {
        lastJump.push(ns.slice(0, pt + 1));
      }
      pt--;
    }
    const result = 1 + subJump(lastJump[lastJump.length - 1]);
    cache[id] = result;
    return result;
  };
  const ans = subJump(nums);
  return ans;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = jump;
// @after-stub-for-debug-end
