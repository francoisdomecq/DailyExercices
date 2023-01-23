import ListNode from "../utils/ListNode";

function middleNode(head: ListNode | null): ListNode | null {
    let rabbit = head?.next;
    let tortle = head;

    while (rabbit) {
        rabbit = rabbit.next?.next;
        if (tortle) tortle = tortle?.next;
    }
    return tortle;
}

let lastNode: ListNode = new ListNode(5, null);
let node: ListNode | null = null;
for (let i = 4; i > 0; i--) {
    node = new ListNode(i, lastNode);
    lastNode = node;
}

console.log(middleNode(node));
