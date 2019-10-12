const Node = require('./node');

class LinkedList {
    constructor() {
        this._head = null;
        this._tail = null;
        this.length = 0;
    }

    append(data) {
        let newNode = new Node(data);

        if (this._head == null) {
            this._head = newNode;
            this._tail = newNode;
        } else {
            this._tail.next = newNode;
            newNode.prev = this._tail;
            this._tail = newNode;
        }
        this.length++;
    }


    head() {
        if (this._head != null) {
            return this._head.data;
        }
        return null;
    }

    tail() {
        if (this._tail != null) {
            return this._tail.data;
        }
        return null;
    }

    at(index) {
        let node = this._head;
        for (let i = 0; i < index; i++) {
            node = node.next;
        }
        return node.data;
    }

    insertAt(index, data) {
        if (index >= this.length) {
            return this.append(data);
        }
        let newNode = new Node(data);
        let node = this._head;

        for (let i = 0; i < index; i++) {
            node = node.next;
        }

        if (node.prev === null) {
            this._head = newNode;
            newNode.next = node;
            node.prev = newNode;
            return;
        }

        node.prev.next = newNode;
        newNode.prev = node.prev;
        newNode.next = node;
        node.prev = newNode;
    }

    isEmpty() {
        return this.length === 0;
    }

    clear() {
        this._head = null;
        this._tail = null;
        this.length = 0;
    }

    deleteAt(index) {
        let node = this._head;
        if (node === null || (node.next === null && node.prev === null)) {
            this._head = null;
            this._tail = null;
        } else {
            for (let i = 0; i < index; i++) {
                node = node.next;
            }
            node.prev.next = node.next;
            node.next.prev = node.prev;
        }

        this.length--;

        return this;
    }

    reverse() {
        let currNode = this._head;
        if (currNode === null || currNode.next === null) return this;
        while (currNode !== null) {
            let tempNode = currNode.prev;
            currNode.prev = currNode.next;
            currNode.next = tempNode;
            currNode = currNode.prev;
        }
        [this._head, this._tail] = [this._tail, this._head];

        return this;
    }

    indexOf(data) {
        let node = this._head;
        for (let i = 0; i < this.length; i++) {
            if (node.data === data) return i;
            node = node.next;
        }
        return -1;
    }
}

module.exports = LinkedList;
