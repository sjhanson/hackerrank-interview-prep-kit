module.exports = {

    whatFlavors(cost, money) {
        let sorted = [];
        let results = [];

        // We need to store the initial index for the solution
        for (let i = 0; i < cost.length; i++) {
            let item = {};
            item.index = i + 1;
            item.price = cost[i];
            sorted.push(item);
        }

        // Sort array
        sorted = sorted.sort((a,b) => a.price - b.price);

        for (let i = 0; i < sorted.length; i++) {
            let diff = money - sorted[i].price;
            let binaryIndex;

            // -- Binary Search Begin --
            let min = 0;
            let max = sorted.length - 1;
            let guess;

            while (min <= max) {
                guess = Math.floor((min + max) / 2);
            
                if (sorted[guess].price === diff) {
                    binaryIndex = guess;
                    break;
                } else {
                    if (sorted[guess].price < diff) {
                        min = guess + 1;
                    } else {
                        max = guess - 1;
                    }
                }
            } // -- Binary Search End --

            if (binaryIndex) {
                
                // We don't want to use the same value twice
                if (i !== binaryIndex) {
                    // Sort answers by index asc
                    results.push(sorted[i].index);
                    results.push(sorted[binaryIndex].index);
                    results = results.sort((a,b) => a - b);
                    return results;
                }
            }
        }
    }
}