const testCase = require('mocha').describe;
const assertions = require('mocha').it;
const assert = require('chai').assert;

const rs = require('../../src/warmup/repeated-string');

testCase('Repeated String', function() {
    testCase('Every Other Letter', function() {
        assertions('should return 11 when every other letter is an \'a\' and array has length of 22', function() {
            const string = 'ab';
            const count = 22;

            let result = rs.repeatedString(string, count);
            assert.equal(result, 11);
        });
    });

    testCase('All As', function() {
        assertions('should return 22 when every letter is an \'a\' and array has length of 22', function() {
            const string = 'a';
            const count = 22;

            let result = rs.repeatedString(string, count);
            assert.equal(result, 22);
        });
    });

    testCase('String Doesn\'t Get Repeated', function() {
        assertions('should return 3 when every other letter is an \'a\' and string does not get repeated', function() {
            const string = 'abababababababababababa';
            const count = 5;

            let result = rs.repeatedString(string, count);
            assert.equal(result, 3);
        });
    });
});