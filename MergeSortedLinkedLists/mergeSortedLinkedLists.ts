import ListNode from "../utils/ListNode";

function mergeTwoLists(
    list1: ListNode | null,
    list2: ListNode | null
): ListNode | null {
    const mergedHead: ListNode = new ListNode(-1, null);
    let prev: ListNode = mergedHead;

    while (list1 && list2) {
        if (list1.val <= list2.val) {
            prev.next = list1;
            list1 = list1.next;
        } else {
            prev.next = list2;
            list2 = list2.next;
        }
        prev = prev.next;
    }
    prev.next = list1 ? list1 : list2;

    return mergedHead.next;
}

let lastNode: ListNode = new ListNode(5, null);
let node: ListNode | null = null;
for (let i = 4; i > 0; i--) {
    node = new ListNode(i, lastNode);
    lastNode = node;
}

let lastNode2: ListNode = new ListNode(5, null);
let node2: ListNode | null = null;
for (let i = 8; i > 0; i = i - 2) {
    node2 = new ListNode(i, lastNode2);
    lastNode2 = node2;
}

console.log(mergeTwoLists(node, node2));
