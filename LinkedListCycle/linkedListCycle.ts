import ListNode from "../utils/ListNode";

function detectCycle(head: ListNode | null): ListNode | null {
    let index = 0;
    let node = head;
    let nodes: Map<ListNode | null, number> = new Map();
    nodes.set(node, index);
    while (node !== null) {
        node = node.next;
        index++;
        if (nodes.has(node)) {
            return node;
        } else {
            nodes.set(node, index);
        }
    }
    return null;
}
