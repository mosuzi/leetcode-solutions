/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
 * @return {ListNode}
 */
var swapPairs = function (head) {
  function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
  if (!head || !head.next) return head;
  let lastNode = new ListNode("_", head);
  let pt1 = head;
  let pt2 = head.next;
  let first = true;
  while (pt1 && pt2) {
    if (first) {
      head = pt2;
      first = false;
    }
    lastNode.next = pt2;
    pt1.next = pt2.next;
    pt2.next = pt1;
    pt1 = pt1.next;
    lastNode = pt2.next
    if (pt1) {
      pt2 = pt1.next;
    } else {
      pt2 = null;
    }
  }
  return head;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = swapPairs;
// @after-stub-for-debug-end
