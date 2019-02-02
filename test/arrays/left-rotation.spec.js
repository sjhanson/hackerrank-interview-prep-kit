const testCase = require('mocha').describe;
const assertions = require('mocha').it;
const assert = require('chai').assert;

const lr = require('../../src/arrays/left-rotation');

testCase('Left Rotation', function() {
    testCase('Move 4 spaces', function() {
        assertions('should return array rotated left 4 spaces when 4 is passed in', function() {
            const count = 4;
            const arr = [1,2,3,4,5];

            const result = lr.rotLeft(arr, count);
            assert.deepEqual(result, [5,1,2,3,4]);
        });
    });

    testCase('Move 3 spaces', function() {
        assertions('should return array rotated left 3 spaces when 3 is passed in', function() {
            const count = 3;
            const arr = [1,2,3,4,5];

            const result = lr.rotLeft(arr, count);
            assert.deepEqual(result, [4,5,1,2,3]);
        });
    });

    testCase('Move 2 spaces', function() {
        assertions('should return array rotated left 2 spaces when 2 is passed in', function() {
            const count = 2;
            const arr = [1,2,3,4,5];

            const result = lr.rotLeft(arr, count);
            assert.deepEqual(result, [3,4,5,1,2]);
        });
    });

    testCase('Move 1 space', function() {
        assertions('should return array rotated left 1 space when 1 is passed in', function() {
            const count = 1;
            const arr = [1,2,3,4,5];

            const result = lr.rotLeft(arr, count);
            assert.deepEqual(result, [2,3,4,5,1]);
        });
    });
});