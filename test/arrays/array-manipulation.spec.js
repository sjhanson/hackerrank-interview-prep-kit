const testCase = require('mocha').describe;
const assertions = require('mocha').it;
const assert = require('chai').assert;

const am = require('../../src/arrays/array-manipulation');

testCase('Array Manipulation', function() {
    testCase('Three Queries', function() {
        assertions('should return 200 when three queries are run on the array', function() {
            const size = 5;
            const arr = [[1,2,100],
                        [2,5,100],
                        [3,4,100]];

            const result = am.arrayManipulation(size, arr);
            assert.equal(result, 200);
        });
    });

    testCase('Long Array', function() {
        assertions('should return 300 when three queries are run on the array', function() {
            const size = 5000;
            const arr = [[1800,4800,100],
                        [1,5000,100],
                        [2000,3000,100]];

            const result = am.arrayManipulation(size, arr);
            assert.equal(result, 300);
        });
    });
});