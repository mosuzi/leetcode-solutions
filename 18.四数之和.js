/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  const len = nums.length;
  if (len < 4) return [];
  nums.sort((a, b) => a - b);
  const ans = [];
  const cache = {};
  for (let i = 0; i < len; i++) {
    let first = i + 1;
    if (nums[i] > 0 && nums[i] > target) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    while (first < len - 2) {
      const firstTwoSum = nums[i] + nums[first];
      if (firstTwoSum > 0 && firstTwoSum > target) break;
      // if (first > 1 && nums[first] === nums[first - 1]) {
      //   first++;
      //   continue;
      // }
      let second = first + 1;
      let third = len - 1;
      while (second < third) {
        const oneResult = [nums[i], nums[first], nums[second], nums[third]];
        const id = oneResult.join("_");
        if (cache[id]) {
          while (second < third && nums[second] === nums[second + 1]) second++;
          while (second < third && nums[third] === nums[third - 1]) third--;
          second++;
          third--;
          continue
        }
        const sum = firstTwoSum + nums[second] + nums[third];
        const sub = sum - target;
        if (sub === 0) {
          ans.push(oneResult);
          cache[id] = true;
          while (second < third && nums[second] === nums[second + 1]) second++;
          while (second < third && nums[third] === nums[third - 1]) third--;
          second++;
          third--;
        } else if (sub < 0) {
          second++;
        } else {
          third--;
        }
      }
      first++;
    }
  }
  return ans;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = fourSum;
// @after-stub-for-debug-end
