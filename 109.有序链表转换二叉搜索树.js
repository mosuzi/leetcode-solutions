/*
 * @lc app=leetcode.cn id=109 lang=javascript
 *
 * [109] 有序链表转换二叉搜索树
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
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
  let root = new TreeNode(head.val)
  while (true) {
    head = head.next
    if (!head) return root
    if (!root.left) {
      root = new TreeNode(head.val, root)
    } else if (!root.right) {
      root.right = new TreeNode(head.val)
    } else {
      const tmp = root
      root = root.right
      tmp.root = null
      root.right = new TreeNode(head.val)
    }
  }
};
// @lc code=end

