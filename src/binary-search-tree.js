const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */

// class Node {
// 	constructor(data) {
// 		this.data = data;
// 		this.left = null;
// 		this.right = null;
// 	}
// }

class BinarySearchTree {
	constructor() {
		this.rootNode = new Node(null);
	}

	root() {
		return this.rootNode.data ? this.rootNode : null;
	}

	add(data) {
		const findPlaceForData = (node) => {
			if (!node) {
				return new Node(data);
			} else if (data < node.data) {
				if (node.left) {
					findPlaceForData(node.left);
				} else {
					node.left = findPlaceForData(node.left);
				}
			} else if (data > node.data) {
				if (node.right) {
					findPlaceForData(node.right);
				} else {
					node.right = findPlaceForData(node.right);
				}
			} else if (data === node.data) {
				return;
			}
		};
		if (this.rootNode.data === null) {
			this.rootNode = new Node(data);
		} else {
			findPlaceForData(this.rootNode);
		}
	}

	has(data) {
		let currentNode = this.rootNode;

		while (currentNode) {
			if (currentNode.data === data) {
				return true;
			}
			if (data < currentNode.data) {
				currentNode = currentNode.left;
			} else {
				currentNode = currentNode.right;
			}
		}

		return false;
	}

	find(data) {
		let currentNode = this.rootNode;

		while (data !== currentNode.data) {
			if (data < currentNode.data) {
				currentNode = currentNode.left;
			} else {
				currentNode = currentNode.right;
			}
			if (currentNode === null) {
				return null;
			}
		}
		return currentNode;
	}

	remove(data) {}

	min() {
		let currentNode = this.rootNode;
		while (currentNode.left) {
			currentNode = currentNode.left;
		}
		return currentNode.data;
	}

	max() {
		let currentNode = this.rootNode;
		while (currentNode.right) {
			currentNode = currentNode.right;
		}
		return currentNode.data;
	}
}

// const tree = new BinarySearchTree();
// tree.add(10);
// tree.add(6);
// tree.add(8);
// tree.add(12);
// tree.add(7);
// tree.add(5);
// console.log(tree.root());
// tree.add(4);
// console.log(tree.root());
// console.log(tree.min());
// console.log(tree.max());
// console.log(tree.find(2));
// console.log(tree.has(5));

module.exports = {
	BinarySearchTree
};
