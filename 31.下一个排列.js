/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  let pt = nums.length - 2;
  while (pt >= 0) {
    const reOrderNums = nums.slice(pt + 1);
    reOrderNums.sort((a, b) => a - b);
    const firstLargerItemIndex = reOrderNums.findIndex(
      (item) => item > nums[pt]
    );
    if (firstLargerItemIndex < 0) {
      pt--;
      continue;
    } else {
      const tmp = nums[pt];
      nums[pt] = reOrderNums[firstLargerItemIndex];
      reOrderNums[firstLargerItemIndex] = tmp;
      nums.splice(pt + 1, reOrderNums.length, ...reOrderNums);
      return;
    }
  }
  nums.reverse();
};
// @lc code=end

// var nextPermutation = function (nums) {
//   const order = [...nums];
//   order.sort((a, b) => a - b);
//   let pt = nums.length - 1;
//   while (pt >= 0) {
//     const disallowPicking = nums.slice(0, pt).reduce((p, c) => {
//       if (!p[c]) p[c] = 1;
//       else p[c]++;
//       return p;
//     }, {});
//     const orderIndex = order.findIndex((item) => item === nums[pt]);
//     const suffixNums = order.slice(orderIndex + 1);
//     const allowPicking = suffixNums.filter((item) => {
//       if (item <= nums[pt]) return false;
//       else if (disallowPicking[item]) {
//         disallowPicking[item]--;
//         return false;
//       } else {
//         return true;
//       }
//     });
//     if (allowPicking.length) {
//       const newNum = allowPicking[0];
//       let filtered = false;
//       const reOrderNums = nums.slice(pt).filter((item) => {
//         if (item === newNum && !filtered) {
//           filtered = true;
//           return false;
//         } else {
//           return true;
//         }
//       });
//       nums[pt] = newNum;
//       reOrderNums.sort((a, b) => a - b);
//       nums.splice(pt + 1, reOrderNums.length, ...reOrderNums);
//       break;
//     }
//     pt--;
//   }
//   if (pt < 0) {
//     nums.sort((a, b) => a - b);
//   }
//   return nums;
// };

// @after-stub-for-debug-begin
module.exports = nextPermutation;
// @after-stub-for-debug-end
