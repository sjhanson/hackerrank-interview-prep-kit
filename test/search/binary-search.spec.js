const testCase = require('mocha').describe;
const assertions = require('mocha').it;
const assert = require('chai').assert;

const bs = require('../../src/search/binary-search');

testCase('Binary Search', function() {
    testCase('Found - Iterative', function() {
        assertions('should return true if the item is found in the array', function() {
            const arr = [7, 14, 22, 2, 3, 8, 5, 122];
            const item = 5;

            const result = bs.iterativeSearch(arr, item);
            assert.equal(result, true);
        });
    });

    testCase('Not Found - Iterative', function() {
        assertions('should return false if the item IS NOT found in the array', function() {
            const arr = [7, 14, 22, 2, 3, 8, 5, 122];
            const item = 55;

            const result = bs.iterativeSearch(arr, item);
            assert.equal(result, false);
        });
    });

    testCase('Found - Recursive', function() {
        assertions('should return true if the item is found in the array', function() {
            const arr = [7, 14, 22, 2, 3, 8, 5, 122];
            const item = 3;

            const result = bs.recursiveSearch(arr, item);
            assert.equal(result, true);
        });
    });

    testCase('Not Found - Recursive', function() {
        assertions('should return false if the item IS NOT found in the array', function() {
            const arr = [7, 14, 22, 2, 3, 8, 5, 122];
            const item = 222;

            const result = bs.recursiveSearch(arr, item);
            assert.equal(result, false);
        });
    });
});