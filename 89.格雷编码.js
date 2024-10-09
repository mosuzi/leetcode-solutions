/*
 * @lc app=leetcode.cn id=89 lang=javascript
 *
 * [89] 格雷编码
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function (n) {
  const oneBitDiff = function (a, b) {
    if (a === b) return false;
    const diff = a ^ b;
    if (diff <= 0) return false;
    return !(diff & (diff - 1));
  };
  const max = Math.pow(2, n);
  const queue = [0];
  let current = 1;
  const array = Array.from(Array(max), (k, v) => v);
  let forkIndex = max - 2;
  const linkMap = {};

  while (true) {
    if (current === undefined) {
      // 队列取尽
      // 若首尾为格雷
      if (
        queue.length === max &&
        oneBitDiff(queue[0], queue[queue.length - 1])
      ) {
        return queue;
      } else {
        // 否则重置队列，重新循环
        let modify = queue[forkIndex - 1] + 1;
        queue.length = forkIndex;
        const currentMin = (linkMap[queue[queue.length - 1]] || [0]).slice(
          -1
        )[0];
        while (forkIndex >= 0 && current === undefined) {
          current = array.find(
            (item) =>
              item >= modify &&
              item >= currentMin &&
              !queue.slice(0, forkIndex).includes(item)
          );
          forkIndex--;
          modify = queue[forkIndex - 1] + 1;
        }
        if (forkIndex < 0) {
          queue[0] = queue[0] + 1;
          queue.length = 1;
        } else {
          queue.length = forkIndex;
        }
        forkIndex = max - 2;
      }
    } else if (current >= max) {
      current = undefined;
      forkIndex = queue.length - 1;
    } else if (
      !queue.includes(current) &&
      oneBitDiff(current, queue[queue.length - 1])
    ) {
      if (!linkMap[queue[queue.length - 1]]) {
        linkMap[queue[queue.length - 1]] = [current];
      } else {
        linkMap[queue[queue.length - 1]].push(current);
      }
      queue.push(current);
      current = array.find((item) => !queue.includes(item));
    } else {
      current++;
    }
  }
};

// @lc code=end
