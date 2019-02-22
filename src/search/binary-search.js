module.exports = {
    iterativeSearch(array, item) {

        // sort array
        array.sort((a,b) => a - b);

        let min = 0;
        let max = array.length - 1;
        let pivot;

        while (min < max) {
            pivot = Math.floor((min + max) / 2);

            if (array[pivot] === item) {
                return true;
            } else if (array[pivot] < item) {
                min += 1;
            } else {
                max -= 1;
            }
        }

        return false;
    },

    recursiveSearch(array, item) {
        
        // sort array
        array.sort((a,b) => a - b);

        let start = 0;
        let end = array.length - 1;

        return search(array, item, start, end);
        
        function search(array, item, start, end) {
            if (start > end) {
                return false;
            }

            let pivot = Math.floor((start + end) / 2);

            if (array[pivot] === item) {
                return true;
            } else if (array[pivot] < item) {
                return search(array, item, pivot + 1, end);
            } else {
                return search(array, item, start, pivot - 1);
            }
        }
    }
}