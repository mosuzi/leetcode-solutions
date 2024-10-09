/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  const Interval = function (start, end) {
    if (Array.isArray(start, end)) {
      this.start = start[0] || 0;
      this.end = start[1] || 0;
    } else {
      this.start = start || 0;
      this.end = end || 0;
    }
  };
  Interval.intersect = function (a, b) {
    return (
      (a.start <= b.start && a.end >= b.start) ||
      (a.start <= b.end && a.end >= b.end) ||
      (b.start <= a.start && b.end >= a.start) ||
      (b.start <= a.end && b.end >= a.end)
    );
  };
  const Schedule = function () {
    this.queue = [];
  };
  Schedule.prototype.insert = function (interval) {
    for (let i = 0; i < this.queue.length; i++) {
      const target = this.queue[i];
      if (interval.start <= target.end || interval.end <= target.start) {
        // 前置节点
        this.merge(interval, i);
        return;
      }
    }
    // 插入最后的位置
    this.queue.push(interval);
  };
  Schedule.prototype.merge = function (interval, startIndex) {
    const item = this.queue[startIndex];
    if (!item || !Interval.intersect(item, interval)) {
      // 目标不存在
      this.queue.splice(startIndex, 0, interval);
    } else {
      // 相交
      this.queue.splice(startIndex, 1);
      const target = new Interval(
        Math.min(interval.start, item.start),
        Math.max(interval.end, item.end)
      );
      this.merge(target, startIndex);
      // } else {
      //   this.queue.splice(startIndex, 0, interval)
    }
  };
  Schedule.prototype.serialize = function () {
    return this.queue.map((item) => [item.start, item.end]);
  };
  const schedule = new Schedule();
  intervals.forEach((item) => {
    const interval = new Interval(item);
    schedule.insert(interval);
  });
  return schedule.serialize();
};
// @lc code=end
