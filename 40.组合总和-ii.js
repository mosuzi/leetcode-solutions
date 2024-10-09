/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  // 排序数组，确保每一项都不大于后一项
  candidates.sort((a, b) => a - b);
  // 解集
  const ans = [];

  // 当前遍历路径，其中的 current 为遍历路径数组，sum 为遍历路径的和
  const road = {
    current: [],
    sum: 0,
  };

  // “树”根节点指针
  let head = 0;
  // 遍历指针
  let pt = 0;

  // 遍历路径增加一项
  const addItem = function (index) {
    const value = candidates[index];
    road.current.push({ value, index });
    // 由于 index 可能超出数组长度限制，所以设置默认加数为 0
    road.sum += value || 0;
  };

  // 按照 count 计数删除多项
  const popItems = function (count = 1) {
    let popped;
    for (let i = 0; i < count; i++) {
      popped = road.current.pop();
      road.sum -= popped.value || 0;
      if (!road.current.length) {
        const nextIndex = getNextIndex(popped.index, popped.value);
        head = nextIndex;
        return nextIndex;
      }
    }
    return getNextIndex(popped.index, popped.value);
  };

  // 根据当前位置和值取下一个不相等的值的索引
  const getNextIndex = function (index, value) {
    let nextIndex = index + 1;
    while (candidates[nextIndex] === value) nextIndex++;
    return nextIndex;
  };

  while (head < candidates.length) {
    addItem(pt);
    if (road.sum < target) {
      pt++;
      if (pt >= candidates.length) {
        pt = popItems(2);
      }
    } else if (road.sum === target) {
      ans.push(road.current.map((item) => item.value));
      pt = popItems(2);
    } else {
      pt = popItems(2);
    }
  }
  return ans;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = combinationSum2;
// @after-stub-for-debug-end
