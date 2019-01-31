module.exports = {
    countingValleys(n, s) {
        let currentElevation = 0;
        let valleyCount = 0;
        let valley = false;

        s.split('').forEach(routePart => {
            if (routePart === 'U') {
                currentElevation ++;

                if (valley === true && currentElevation === 0) {
                    valleyCount ++;
                }
            } else {
                currentElevation --;
                if (currentElevation < 0) {
                    valley = true;
                }
            }
        });

        return valleyCount;
    }
}