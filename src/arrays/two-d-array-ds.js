module.exports = {
    hourglassSum(arr) {
        let totals = new Array(16);
        let times = 0;

        for (let i = 0; i < 4; i++) {
            for(let i2 = 0; i2 < 4; i2++) {
                totals[times] = 0;

                // 0,0|0,1|0,2
                totals[times] += arr[i][i2];
                totals[times] += arr[i][1+i2];
                totals[times] += arr[i][2+i2];

                // 1,1
                totals[times] += arr[1+i][1+i2];

                // 2,0|2,1|2,2
                totals[times] += arr[2+i][i2];
                totals[times] += arr[2+i][1+i2];
                totals[times] += arr[2+i][2+i2];

                times ++;
            }
        }

        return Math.max(...totals);
    }
}