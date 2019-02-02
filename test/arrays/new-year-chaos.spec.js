const testCase = require('mocha').describe;
const assertions = require('mocha').it;
const assert = require('chai').assert;

const nyc = require('../../src/arrays/new-year-chaos');

testCase('New Year Chaos', function() {
    testCase('Too Chaotic', function() {
        assertions('should return \'Too Chaotic\' when an index is altered by more than 2 spaces', function() {
            const arr = [2,5,1,3,4];

            const result = nyc.minimumBribes(arr);
            assert.equal(result, 'Too Chaotic');
        });
    });

    testCase('Three Moves', function() {
        assertions('should return 3 when a minimum of 3 moves were required to re-order array', function() {
            //const arr = [2,5,1,3,4];
            const arr = [2,1,5,3,4];

            const result = nyc.minimumBribes(arr);
            assert.equal(result, 3);
        });
    });
});