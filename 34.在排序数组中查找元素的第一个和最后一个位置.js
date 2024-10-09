/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  if (!nums.length) return [-1, -1];
  if (nums.length === 1 && nums[0] !== target) return [-1, -1];
  let pt = 0;
  const ans = [];
  while (pt < nums.length) {
    if (nums[pt] > target) return [-1, -1];
    if (nums[pt] === target) {
      ans.push(pt);
      let targetIndex = pt + 1;
      while (nums[targetIndex] === target && targetIndex < nums.length) {
        targetIndex++;
      }
      ans.push(targetIndex - 1);
      return ans;
    }
    pt++;
  }
  return [-1, -1];
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = searchRange;
// @after-stub-for-debug-end
