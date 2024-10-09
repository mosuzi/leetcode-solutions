/*
 * @lc app=leetcode.cn id=477 lang=javascript
 *
 * [477] 汉明距离总和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var totalHammingDistance = function (nums) {
  let sum = 0;
  for (let i = 0; i < 32; i++) {
    let c = 0;
    for (let one of nums) {
      c += (one >> i) & 1;
    }
    sum+=c * (nums.length - c)
  }
  return sum
};
// @lc code=end
