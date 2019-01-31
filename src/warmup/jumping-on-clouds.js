module.exports = {
    jumpingOnClouds(c) {
        let jumpCount = 0;
        let currentIndex = 0;

        while (currentIndex < c.length - 1) {

            // can you jump two spaces?
            if (c[currentIndex + 2] === 0) {
                currentIndex += 2;
                jumpCount ++;

            } else {  // if not take one space
                currentIndex ++;
                jumpCount ++;
            }
        }

        return jumpCount;
    }
}