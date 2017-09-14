class LinkedList {
    constructor(element) {
        this.head = new Node(element);
        this.head.next = this.head;

    }

    /**
     * Core method
     * @param item
     */
    find(item) {
        var currNode = this.head;
        while (currNode.element !== item) {
            currNode = currNode.next;
        }

        return currNode;
    }

    /**
     *
     * @param newElement
     * @param item
     */
    insert(newElement, item) {
        var newNode = new Node(newElement);
        var current = this.find(item);
        newNode.next = current.next;
        newNode.previous = current;
        current.next = newNode;
    }

    /**
     *
     * @param item
     */
    remove(item) {
        var currNode = this.find(item);
        if (!(currNode === null)) {
            currNode.previous.next = currNode.next;
            currNode.next.previous = currNode.previous;
            currNode.next = null;
            currNode.previous = null;
        }
    }

}

class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
        this.previous = null;
    }
}

module.exports = {
    LinkedList: LinkedList
};