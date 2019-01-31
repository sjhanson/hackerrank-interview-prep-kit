const testCase = require('mocha').describe;
const assertions = require('mocha').it;
const assert = require('chai').assert;

const joc = require('../../src/warmup/jumping-on-clouds');

testCase('Jumping On Clouds', function() {
    testCase('All Double Jumps', function() {
        assertions('should return 3 when there are 3 double jumps needed', function() {
            const c = [0,1,0,1,0,1,0];
            let result = joc.jumpingOnClouds(c);
            assert.equal(result, 3);
        });
    });

    testCase('Combination Jumps', function() {
        assertions('should return 7 when there are 7 combined jumps needed', function() {
            const c = [0,1,0,0,1,0,1,0,0,1,0,0];
            let result = joc.jumpingOnClouds(c);
            assert.equal(result, 7);
        });
    });
});