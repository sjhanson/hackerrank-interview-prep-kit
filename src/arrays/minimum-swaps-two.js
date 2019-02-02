module.exports = {
    minimumSwaps(arr) {
        let first = 0;
        let last = arr.length - 1;
        let swaps = 0;

        while(first < last) {
            while(arr[first] === first + 1 && first < last) {
                first++;
            }

            if (first < last) {
                const destIndex = arr[first] -1;
                const temp = arr[destIndex];
                arr[destIndex] = arr[first];
                arr[first] = temp;
                swaps ++;
            }
        }

        return swaps;
    }
}