/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let maxVolume = 0;
  while (left < right) {
    if (height[right] > height[left]) {
      const current = (right - left) * height[left]
      maxVolume = Math.max(current, maxVolume)
      left ++
    } else {
      const current = (right - left) * height[right]
      maxVolume = Math.max(current, maxVolume)
      right--
    }
  }
  return maxVolume
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = maxArea;
// @after-stub-for-debug-end
