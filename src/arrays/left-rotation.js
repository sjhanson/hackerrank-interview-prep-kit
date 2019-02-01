module.exports = {
    rotLeft(a, d) {
        let arr = a;
        let count = d;

        count -= arr.length * Math.floor(count / arr.length);
        arr.push.apply(arr, arr.splice(0, count))

        return arr;
    }
}