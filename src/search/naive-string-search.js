module.exports = {
    bruteForce(string, pattern) {
        const strArr = string.split('');
        const pattArr = pattern.split('');

        const M = pattArr.length;
        const N = strArr.length;

        // Loop through string array
        // We know there can't be a match if we've 
        // reached the position in the array where the 
        // pattern string won't fit anymore
        for (let i = 0; i <= N - M; i++) {
            
            // Loop through pattern
            for (let j = 0; j < M; j++) {
                
                if (strArr[i + j] !== pattArr[j]) {

                    // Not a match, move on to next string character
                    break;
                }

                // Check length of pattern matched
                if (j === (M - 1)) {

                    // Full pattern matched
                    return true;
                }
            }
        }

        return false;
    }
}