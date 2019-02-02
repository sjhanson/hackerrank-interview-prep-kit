module.exports = {
    minimumBribes(arr) {
        let ans = 0;

        for(let i = arr.length - 1; i >= 0; i--) {
            if ((arr[i] - (i + 1)) > 2) {
                return "Too Chaotic"
            } else {
                for (let j = Math.max(0, arr[i] - 2); j < i; j++) {
                    if (arr[j] > arr[i]) {
                        ans++;
                    }
                }
            }
        }

        return ans;
    }
}