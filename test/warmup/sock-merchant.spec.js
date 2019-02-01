const testCase = require('mocha').describe;
const assertions = require('mocha').it;
const assert = require('chai').assert;

const sm = require('../../src/warmup/sock-merchant');

testCase('Sock Merchant', function() {
    testCase('Single Color Single Pair', function() {
        assertions('should return 1 pair when there are 3 same colored socks passed in', function() {
            let n = 5;
            let ar = [10,10,10];

            const result = sm.sockMerchant(n, ar);
            assert.equal(result, 1);
        });
    });

    testCase('Single Color Multiple Pairs', function() {
        assertions('should return 2 pairs when there are 5 same colored socks passed in', function() {
            let n = 5;
            let ar = [10,10,10,10,10];

            const result = sm.sockMerchant(n, ar);
            assert.equal(result, 2);
        });
    });

    testCase('Multiple Colors Single Pair', function() {
        assertions('should return 1 pair when there are 4 colors passed in', function() {
            let n = 5;
            let ar = [10,20,30,40,10];

            const result = sm.sockMerchant(n, ar);
            assert.equal(result, 1);
        });
    });

    testCase('Multiple Colors Multiple Pairs', function() {
        assertions('should return 2 pairs when there are 4 colors passed in', function() {
            let n = 5;
            let ar = [10,20,30,40,10,40];

            const result = sm.sockMerchant(n, ar);
            assert.equal(result, 3);
        });
    });
});