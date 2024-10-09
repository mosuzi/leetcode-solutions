/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const ans = [];
  let maxPermuteLength = 1;
  for (let i = 2; i <= nums.length; i++) {
    maxPermuteLength *= i;
  }
  const getNextMute = function (ns) {
    ns = [...ns];
    let pt = ns.length - 2;
    while (pt >= 0) {
      const reOrder = ns.slice(pt + 1);
      reOrder.sort((a, b) => a - b);
      const firstPickIndex = reOrder.findIndex((item) => item > ns[pt]);
      if (firstPickIndex > -1) {
        const tmp = ns[pt];
        ns[pt] = reOrder[firstPickIndex];
        reOrder[firstPickIndex] = tmp;
        ns.splice(pt + 1, reOrder.length, ...reOrder);
        return ns;
      }
      pt--;
    }
    ns.reverse();
    return ns;
  };
  const isSame = function (a, b) {
    if (!a && b) return false;
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  };
  while (ans.length < maxPermuteLength && !isSame(ans[0], nums)) {
    ans.push(nums);
    nums = getNextMute(nums);
  }
  return ans;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = permuteUnique;
// @after-stub-for-debug-end