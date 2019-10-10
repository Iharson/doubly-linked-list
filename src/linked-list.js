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

    at(index) {}

    insertAt(index, data) {}

    isEmpty() {}

    clear() {
        this._head = null;
        this._tail = null;
        this.length = 0;
    }

    deleteAt(index) {}

    reverse() {}

    indexOf(data) {}
}

module.exports = LinkedList;
