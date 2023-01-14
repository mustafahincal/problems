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
  let sum = 0,
    carry = 0;
  let nodeToSet = new ListNode(0);
  let temp = nodeToSet;
  let l3 = nodeToSet;

  while (l1 || l2) {
    if (l1) sum += l1.val;
    if (l2) sum += l2.val;

    temp = nodeToSet;
    nodeToSet.val = (sum + carry) % 10;
    carry = sum + carry > 9 ? 1 : 0;

    if (l1 && l1.next ? 1 : 0 || (l2 && l2.next) ? 1 : 0) {
      nodeToSet = new ListNode();
      temp.next = nodeToSet;
    }

    l1 = l1 ? l1.next : undefined;
    l2 = l2 ? l2.next : undefined;
    sum = 0;
  }
  if (carry) {
    nodeToSet = new ListNode(1);
    temp.next = nodeToSet;
  }

  return l3;
};
