module.exports = {
    sockMerchant(n, ar) {
        let colorCount = {};

        ar.forEach(color => {
            if (colorCount[color] != null) {
                colorCount[color] += 1;
            } else {
                colorCount[color] = 1;
            }
        });

        let pairs = 0;

        for(const key in colorCount) {
            let count = colorCount[key];
            let colorPairs = count/2 >> 0;
            pairs += colorPairs;
        }

        return pairs;
    }
}
