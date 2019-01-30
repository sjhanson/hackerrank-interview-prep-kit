'use strict';

// Complete the sockMerchant function below.
function sockMerchant(n, arr) {
    let colorCount = {};

    ar.forEach(color => {
        if (colorCount[color] != null) {
            colorCount[color] = colorCount[color] + 1;
        } else {
            colorCount[color] = 1;
        }
    });

    let pairs = 0;

    for(const key in colorCount) {
        let count = colorCount[key];
        let colorPairs = count/2 >> 0;
        pairs = pairs + colorPairs;
    }

    return pairs;
}

let n = 9;
let ar = [10,20,20,10,10,30,50,10,20];

const result = sockMerchant(n, ar);
console.log('Result: ', result);
