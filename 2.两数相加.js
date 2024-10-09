/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let carry = 0;
  const result = new ListNode();
  let currentNode = result;
  while (true) {
    const sum = l1.val + l2.val + carry;
    if (sum >= 10) {
      carry = 1;
      currentNode.val = sum - 10;
    } else {
      carry = 0;
      currentNode.val = sum;
    }
    l1 = l1.next;
    l2 = l2.next;
    if (!l1 && l2) {
      l1 = new ListNode(0);
    } else if (!l2 && l1) {
      l2 = new ListNode(0);
    } else if (!l2 && !l1) {
      if (carry) {
        currentNode.next = new ListNode(carry)
      }
      return result;
    }
    currentNode.next = new ListNode();
    currentNode = currentNode.next;
  }
};
// @lc code=end
