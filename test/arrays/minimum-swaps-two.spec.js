const testCase = require('mocha').describe;
const assertions = require('mocha').it;
const assert = require('chai').assert;

const mst = require('../../src/arrays/minimum-swaps-two');

testCase('Minimum Swaps Two', function() {
    testCase('Three Moves', function() {
        assertions('should return 3 when a minimum of 3 moves are needed to sort array', function() {
            const arr = [4,3,1,2];

            const result = mst.minimumSwaps(arr);
            assert.equal(result, 3);
        });
    });

    testCase('Four Moves', function() {
        assertions('should return 4 when a minimum of 4 moves are needed to sort array', function() {
            const arr = [5,4,2,1,3];

            const result = mst.minimumSwaps(arr);
            assert.equal(result, 4);
        });
    });
});