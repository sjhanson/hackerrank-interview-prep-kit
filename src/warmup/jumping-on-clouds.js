// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c) {
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

const c = [0,0,0,0,1,0];
let results = jumpingOnClouds(c);
console.log('Results: ', results);