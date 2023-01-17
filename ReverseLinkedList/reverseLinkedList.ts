import ListNode from '../utils/ListNode'

function reverseList(head: ListNode | null): ListNode | null {
    let n,
        h = head;
    while (h !== null) {
        n = new ListNode(h.val, n);
        h = h.next;
    }
    return n === undefined ? null : n;
}

let lastNode: ListNode = new ListNode(5, null);
let node: ListNode | null = null;
for (let i = 4; i > 0; i--) {
    node = new ListNode(i, lastNode);
    lastNode = node;
}

console.log(reverseList(node));
