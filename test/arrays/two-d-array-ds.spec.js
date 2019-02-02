const testCase = require('mocha').describe;
const assertions = require('mocha').it;
const assert = require('chai').assert;

const td = require('../../src/arrays/two-d-array-ds');

testCase('2d Array - DS', function() {
    testCase('Hourglass', function() {
        assertions('should return 19 with 6 x 6 array with highest hourglass being 19', function() {
            let arr = Array(6);

            arr[0] = [1,1,1,0,0,0];
            arr[1] = [0,1,0,0,0,0];
            arr[2] = [1,1,1,0,0,0];
            arr[3] = [0,0,2,4,4,0];
            arr[4] = [0,0,0,2,0,0];
            arr[5] = [0,0,1,2,4,0];

            const result = td.hourglassSum(arr);
            assert.equal(result, 19);
        });
    });
});