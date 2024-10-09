/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let permuteLength = 1;
  for (let i = 2; i <= nums.length; i++) {
    permuteLength *= i;
  }
  const ans = [];
  const getNextMute = function (ns) {
    ns = [...ns];
    let pt = ns.length - 2;
    while (pt >= 0) {
      const reOrder = ns.slice(pt + 1);
      reOrder.sort((a, b) => a - b);
      const firstPickIndex = reOrder.findIndex(item => item > ns[pt])
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
  while (ans.length < permuteLength) {
    ans.push(nums);
    nums = getNextMute(nums);
  }
  return ans;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = permute;
// @after-stub-for-debug-end