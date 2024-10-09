/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let pt = 0;
  const limitPt = function () {
    if (pt < 0) {
      pt = nums.length - 1;
    } else if (pt >= nums.length) {
      pt = 0;
    }
  };
  const search = function (direction) {
    while (true) {
      if (nums[pt] === target) return pt;
      else if (!((nums[pt] - target > 0) ^ (direction > 0))) {
        return -1;
      }
      pt += direction;
      limitPt();
      if (pt === 0) {
        return -1
      }
    }
  };
  if (nums[pt] === target) return pt;
  if (nums.length === 1) return -1;
  if (nums[pt] > target) {
    pt - 1;
    limitPt();
    return search(-1);
  } else {
    pt++;
    limitPt();
    return search(1);
  }
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = search;
// @after-stub-for-debug-end
