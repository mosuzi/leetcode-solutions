/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b);
  const len = nums.length;
  let minSub = null;
  let ans = 0
  for (let i = 0; i < len; i++) {
    let left = i + 1;
    let right = len - 1;
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      const sub = sum - target;
      const absSub = Math.abs(sub);
      if (minSub === null || absSub < minSub) {
        minSub = absSub
        ans = sum
      };
      if (sub > 0) {
        right--;
      } else if (sub < 0) {
        left++;
      } else {
        return sum;
      }
    }
  }
  return ans;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = threeSumClosest;
// @after-stub-for-debug-end
