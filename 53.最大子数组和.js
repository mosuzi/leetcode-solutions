/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// var maxSubArray = function (nums) {
//   let pre = 0;
//   let max = nums[0];
//   nums.forEach((item) => {
//     pre = Math.max(pre + item, item);
//     max = Math.max(pre, max);
//   });
//   return max;
// };
var maxSubArray = function (nums) {
  const preArr = [];
  let max = nums[0];
  nums.forEach((item) => {
    let sum = nums[0];
    if (preArr.length) {
      sum = preArr[preArr.length - 1].reduce((p, c) => ((p += c), p), 0);
      if (sum + item >= item) {
        preArr.push([...preArr[preArr.length - 1], item]);
      } else {
        preArr.push([item]);
      }
    } else {
      preArr.push([item]);
    }
    max = Math.max(sum, max);
    console.log(max);
  });
  console.log(preArr);
  return max;
};
// @lc code=end

// maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);

// var maxSubArray = function (nums) {
//   const getSum = function (ns) {
//     return ns.reduce((p, c) => ((p += c), p), 0);
//   };
//   let maxSum = -Math.pow(2, 31);
//   let left = 0;
//   let right = nums.length;
//   while (left < right) {
//     const sum = getSum(nums.slice(left, right));
//     maxSum = Math.max(sum, maxSum);
//     if (nums[left] < 0 && nums[left] <= nums[right - 1]) {
//       left++;
//     } else if (nums[right - 1] < 0 && nums[right - 1] <= nums[left]) {
//       right--;
//     } else {
//       let leftDropSum = nums[left];
//       let secondLeft = left + 1;
//       let rightDropSum = nums[right - 1];
//       let secondRight = right - 1;
//       while (leftDropSum >= 0 && rightDropSum >= 0 && secondLeft < right) {
//         leftDropSum += nums[secondLeft];
//         rightDropSum += nums[secondRight - 1];
//         secondLeft++;
//         secondRight--;
//       }
//       if (leftDropSum > rightDropSum && rightDropSum < 0) {
//         maxSum = Math.max(rightDropSum, maxSum);
//         right = secondRight;
//       } else if (leftDropSum < rightDropSum && leftDropSum < 0) {
//         maxSum = Math.max(leftDropSum, maxSum);
//         left = secondLeft;
//       } else {
//         left++;
//         right--;
//         break;
//       }
//       //   while (leftDropSum >= 0 && secondLeft < right) {
//       //     leftDropSum += nums[secondLeft];
//       //     secondLeft++;
//       //   }
//       //   let rightDropSum = nums[right - 1];
//       //   let secondRight = right - 1;
//       //   while (rightDropSum >= 0 && secondRight > left) {
//       //     rightDropSum += nums[secondRight - 1];
//       //     secondRight--;
//       //   }
//       //   if (leftDropSum <= rightDropSum && leftDropSum < 0) {
//       //     maxSum = Math.max(leftDropSum, maxSum);
//       //     left = secondLeft;
//       //     continue;
//       //   } else if (leftDropSum > rightDropSum && rightDropSum < 0) {
//       //     maxSum = Math.max(rightDropSum, maxSum);
//       //     right = secondRight;
//       //     continue;
//       //   }
//       //   break;
//     }
//   }
//   maxSum = Math.max(maxSum, ...nums);
//   return maxSum;
// };

// const cases = [
//   { input: [1, -2, 0], output: 1 },
//   { input: [3, -1, -2, 1, 1], output: 3 },
//   { input: [3, -1, -2, 1], output: 3 },
//   {
//     input: [-1, -2, 3, -1, -2, 1, 1],
//     output: 3,
//   },
//   {
//     input: [2, 0, -3, 2, 1, 0, 1, -2],
//     output: 4,
//   },
//   { input: [0, 0, -3, 1], output: 1 },
//   { input: [1, 2, -1, -2, 2, 1, -2, 1, 4, -5, 4], output: 6 },
//   { input: [5, 4, -1, 7, 8], output: 23 },
//   { input: [-2, -1], output: -1 },
//   { input: [-1, 0, -2], output: 0 },
//   { input: [-2, -1, -2], output: -1 },
//   { input: [-2, 1, -3, 4, -1, 2, 1, -5, 4], output: 6 },
//   { input: [0, -2, 0], output: 0 },
//   { input: [3, 1, -3, -3, 2, -1], output: 4 },
//   { input: [-3, 1, 0, -1, -2, 3, 2, -1], output: 5 },
//   { input: [1, -3, 2, 0, -1, 0, -2, -3, 1, 2, -3, 2], output: 3 },
// ];

// const test = function () {
//   cases.forEach((cas) => {
//     const realOutput = maxSubArray(cas.input);
//     if (realOutput !== cas.output) {
//       console.log("case", cas.input);
//       console.log("expect", cas.output);
//       console.log("output", realOutput);
//       console.log();
//     }
//   });
// };

// test();

// @after-stub-for-debug-begin
module.exports = maxSubArray;
// @after-stub-for-debug-end
