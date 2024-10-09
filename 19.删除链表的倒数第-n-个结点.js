/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let pt = head;
  const arr = [];
  while (pt) {
    arr.push(pt);
    pt = pt.next;
  }
  const target = arr[arr.length - n];
  target.next = null;
  const last = arr[arr.length - n - 1];
  if (last) {
    last.next = arr[arr.length - n + 1] || null;
  } else {
    head = arr[arr.length - n + 1] || null;
  }
  return head
};
// @lc code=end
