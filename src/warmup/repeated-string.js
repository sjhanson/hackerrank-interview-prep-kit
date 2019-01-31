// Complete the repeatedString function below.
function repeatedString(s, n) {
    const length = s.length;
    const quotient = Math.floor(n/length);
    const remainder = n % length;

    let count = (s.split('a').length - 1) * quotient;

    const substring = s.substring(0, remainder);
    let substringCount = substring.split('a').length - 1;
    count += substringCount;

    return count;
}


const string = 'ab';
const count = 22;
let result = repeatedString(string, count);
console.log(result);