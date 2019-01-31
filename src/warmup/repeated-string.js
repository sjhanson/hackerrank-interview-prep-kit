module.exports = {
    repeatedString(s, n) {
        const length = s.length;
        const quotient = Math.floor(n/length);
        const remainder = n % length;

        let count = (s.split('a').length - 1) * quotient;

        const substring = s.substring(0, remainder);
        let substringCount = substring.split('a').length - 1;
        count += substringCount;

        return count;
    }
}