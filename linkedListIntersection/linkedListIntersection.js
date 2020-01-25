/*
 *
 * Linked List Intersection
 *
 * Write a function linkedListIntersection that returns the node
 * at which the intersection of two linked lists begins,
 * or null if there is no such intersection.
 *
 * Example:
 *
 * Given the following two linked lists list1 and list2,
 * linkedListIntersection(list1,list2) should return D
 * as the node of intersection.
 *
 *    A → B → C
 *             ↘
 *               D → E → F
 *             ↗
 *        X → Y
 *
 * Given the following two linked lists list1 and list2,
 * linkedListIntersection(list1,list2) should return NULL
 * as there is no point of intersection.
 *
 *    A → B → C → D
 *    X → Y → Z
 *
 */

// Helper function (do not edit)
function Node(val) {
  var obj = {};
  obj.value = val || null;
  obj.next = null;
  return obj;
}

function linkedListIntersection(list1, list2) {
  // TODO: Implement this function!
  let head1 = list1.value;
  let head2 = list2.value;
  let lengList1 = 0;
  let lengList2 = 0;
  let pointer1 = 0;
  let pointer2 = 0;

  if (!head1 || !head2) {
    return null;
  }

  while (head1.value !== null) {
    lengList1 += 1;
    pointer1 = head1.next;
  }
  while (head2.value !== null) {
    lengList2 += 1;
    pointer2 = head2.next;
  }
  if (lengList1 === lengList2) {
    return null;
  }
  if (lengList1 > lengList2) {
  }
}
