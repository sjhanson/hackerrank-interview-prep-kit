const testCase = require('mocha').describe;
const assertions = require('mocha').it;
const assert = require('chai').assert;

const icp = require('../../src/search/ice-cream-parlor');

testCase('Ice Cream Parlor', function() {
    testCase('Twelve Dolloars', function() {
        assertions('should return indexes 1 and 3 when 12 dollars can be spent', function() {
            const cost = [7, 2, 5, 4, 11];
            const money = 12;
            const answer = [1,3];

            const result = icp.whatFlavors(cost, money);
            assert.deepEqual(result, answer);
        });
    });

    testCase('Four Dolloars', function() {
        assertions('should return indexes 1 and 4 when 4 dollars can be spent', function() {
            const cost = [1, 4, 5, 3, 2];
            const money = 4;
            const answer = [1,4];

            const result = icp.whatFlavors(cost, money);
            assert.deepEqual(result, answer);
        });
    });

    testCase('Four Dolloars', function() {
        assertions('should return indexes 1 and 2 when 4 dollars can be spent', function() {
            const cost = [2, 2, 4, 3];
            const money = 4;
            const answer = [1,2];

            const result = icp.whatFlavors(cost, money);
            assert.deepEqual(result, answer);
        });
    });
});