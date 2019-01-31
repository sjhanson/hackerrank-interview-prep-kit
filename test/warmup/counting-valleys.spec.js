const testCase = require('mocha').describe;
const assertions = require('mocha').it;
const assert = require('chai').assert;

const cv = require('../../src/warmup/counting-valleys');

testCase('Counting Valleys', function() {
    testCase('No Valleys', function() {
        assertions('should return 0 when there are no valleys', function() {
            let n = 8;
            let s = 'UUUUDDDD';

            const result = cv.countingValleys(n,s)
            assert.equal(result, 0);
        });
    });

    testCase('Single Valley', function() {
        assertions('should return 1 when there is a single valley', function() {
            let n = 8;
            let s = 'UDDDUDUU';

            const result = cv.countingValleys(n,s)
            assert.equal(result, 1);
        });
    });

    testCase('Two Valleys', function() {
        assertions('should return 2 when there are two valleys', function() {
            let n = 16;
            let s = 'UDDDUDUUUDDDUDUU';

            const result = cv.countingValleys(n,s)
            assert.equal(result, 2);
        });
    });
});