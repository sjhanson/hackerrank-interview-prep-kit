const testCase = require('mocha').describe;
const assertions = require('mocha').it;
const assert = require('chai').assert;

const nss = require('../../src/search/naive-string-search');

testCase('Naive String Search', function() {
    testCase('Found', function() {
        assertions('should return true if the pattern is found in the string', function() {
            const string = 'does this contain a word?';
            const pattern = 'this';

            const result = nss.bruteForce(string, pattern);
            assert.equal(result, true);
        });
    });

    testCase('Not Found', function() {
        assertions('should return false if the pattern IS NOT found in the string', function() {
            const string = 'does this contain a word?';
            const pattern = 'nope';

            const result = nss.bruteForce(string, pattern);
            assert.equal(result, false);
        });
    });
});