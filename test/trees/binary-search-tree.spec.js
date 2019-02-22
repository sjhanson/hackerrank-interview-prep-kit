const testCase = require('mocha').describe;
const assertions = require('mocha').it;
const assert = require('chai').assert;

const bst = require('../../src/trees/binary-search-tree');

testCase('Binary Search Tree', function() {
    testCase('Create Binary Tree', function() {
        assertions('should return a tree with root value of 100', function() {
            let tree = new bst.BinarySearchTree();
            tree.insert(100);
            tree.insert(200);
            tree.insert(150);
            tree.insert(250);
            tree.insert(50);
            tree.insert(25);
            tree.insert(75);

            assert.equal(tree.root.value, 100);
        });
    });
});