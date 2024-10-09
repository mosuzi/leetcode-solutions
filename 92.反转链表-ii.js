/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  sub = right - left;
  if (sub === 0) return head;
  left = left - 1;
  // right = right - 1
  let leftBp = head;
  let start = head;
  let end;
  let leftLock = true;
  while (left) {
    start = start.next;
    if (!leftLock) {
      leftBp = leftBp.next;
    }
    leftLock = false;
    left--;
  }
  end = start.next;
  while (sub) {
    const tmp = end;
    end = end.next;
    tmp.next = start;
    start = tmp;
    sub--;
  }

  if (!leftLock) {
      leftBp.next.next = end;
      leftBp.next = start;
  } else {
    leftBp.next = end
    head = start
  }
  return head;
};


// @lc code=end
